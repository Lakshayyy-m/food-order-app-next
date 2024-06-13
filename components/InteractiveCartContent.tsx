"use client";
import React from "react";
import Button from "./InteractiveButton";
import { getCart, updateQuantity } from "@/actions/cart.action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getStripe from "@/lib/getStripe";
import { useUser } from "@clerk/nextjs";

const InteractiveCartContent = ({ cart }: { cart: any }) => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { data, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => JSON.parse((await getCart())!),
    initialData: cart,
    staleTime: 0,
  });

  if (error) <h1>An error occured</h1>;

  const { mutate } = useMutation({
    mutationFn: ({
      operation,
      pid,
    }: {
      operation: "increment" | "decrement";
      pid: string;
    }) => {
      return updateQuantity({ operation, pid });
    },
    onMutate: async ({ operation, pid }) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousData: any = queryClient.getQueryData(["cart"]);
      queryClient.setQueryData(["cart"], () => {
        const newData = { ...previousData };
        let ind: number;
        previousData.productList.map((item: any, index: number) => {
          if (item.productId._id.toString() === pid) {
            ind = index;
          }
        });
        if (operation === "increment") {
          newData.productList[ind!].quantity++;
        } else if (operation === "decrement") {
          if (newData.productList[ind!].quantity === 1) {
            newData.productList.splice(ind!, 1);
          } else {
            newData.productList[ind!].quantity--;
          }
        }
        return newData;
      });
      return { previousData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["cart"], () => context?.previousData);
    },
    onSettled: () => {
      queryClient.refetchQueries(
        {
          queryKey: ["cart"],
          type: "all",
        },
        {
          throwOnError: true,
        }
      );
    },
  });

  const changeQuantity = (
    operation: "increment" | "decrement",
    pid: string
  ) => {
    mutate({ operation, pid });
  };
  if (data.productList.length === 0) {
    return (
      <div className="p-4 w-full h-full flex justify-center items-center text-gray-700">
        There are no items in your cart yet
      </div>
    );
  }
  let total = data.productList.reduce((accumulator: number, currVal: any) => {
    return +(+accumulator) + +(+currVal.quantity * +currVal.productId.price);
  }, 0);
  total = Math.round(total * 100) / 100;

  const proceedToCheckout = async () => {
    const stripe = await getStripe();
    console.log(data.productList)
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productList: data.productList,
        userId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
      }),
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="p-4 w-full flex justify-center items-center max-lg:flex-col max-lg:gap-10">
      <div className="basis-[70%] w-full flex flex-col gap-10 p-7 px-14 max-sm:px-4">
        {data.productList.map((item: any) => (
          <div key={item.productId._id} className="flex justify-between">
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-bold max-md:text-xl ">
                {item.productId.name}
              </p>
              <p className="text-lg italic text-gray-600">
                $ {item.productId.price.toString()}
              </p>
            </div>
            <div>
              <div className="flex justify-center gap-10 max-sm:gap-5 items-center">
                <Button
                  className="font-bold text-3xl p-2 max-sm:text-2xl border-red-1 border rounded-full h-[25px] w-[25px] flex justify-center items-center hover:bg-red-1 hover:text-white transition-colors"
                  onClick={() =>
                    changeQuantity("increment", item.productId._id.toString())
                  }
                >
                  +
                </Button>
                <input
                  type="number"
                  className="w-16 text-2xl p-2 font-bold bg-light-1 text-center max-md:text-xl max-md:w-10"
                  disabled
                  min="0"
                  value={item.quantity}
                />
                <Button
                  className="font-bold text-3xl max-sm:text-2xl  border-red-1 border rounded-full h-[25px] w-[25px] flex justify-center items-center hover:bg-red-1 hover:text-white transition-colors"
                  onClick={() =>
                    changeQuantity("decrement", item.productId._id.toString())
                  }
                >
                  -
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="h-[calc(100vh-250px)] w-[2px] bg-dark-1 max-lg:w-[80%] max-lg:h-[2px]" />
      <div className="basis-[30%] w-full h-full flex flex-col justify-start items-center text-4xl font-bold gap-10">
        <h1 className="font-semibold">Summary</h1>
        <div className="flex w-full justify-between px-9">
          <p className="font-thin text-xl italic">Subtotal:</p>
          <p className="font-thin text-xl italic">${total}</p>
        </div>
        <div className="flex w-full justify-between px-9">
          <p className="font-thin text-xl italic">Shipping:</p>
          <p className="font-thin text-xl italic">$25</p>
        </div>
        <hr className="h-[2px] bg-black w-[80%]" />
        <div className="flex w-full justify-between px-9">
          <p className="font-thin text-xl italic">Total:</p>
          <p className="font-thin text-xl italic">${total + 25}</p>
        </div>
        <Button
          className="mt-10 w-[80%] max-xl:text-lg text-xl bg-red-1 py-4 px-6 rounded-full text-light-1"
          onClick={proceedToCheckout}
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default InteractiveCartContent;
