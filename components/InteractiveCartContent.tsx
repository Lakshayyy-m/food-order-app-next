"use client";
import React from "react";
import Button from "./InteractiveButton";
import { getCart, updateQuantity } from "@/actions/cart.action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const InteractiveCartContent = ({ cart }: { cart: any }) => {
  const queryClient = useQueryClient();
  const { data, error} = useQuery({
    queryKey: ["cart"],
    queryFn:async () => JSON.parse((await getCart())!),
    initialData: cart,
    staleTime: 0,
  });

  if (error) <h1>An error occured</h1>;

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      operation,
      pid,
    }: {
      operation: "increment" | "decrement";
      pid: string;
    }) => {
      console.log(operation, pid);
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
      // refetch();
    },
  });

  const changeQuantity = (
    operation: "increment" | "decrement",
    pid: string
  ) => {
    mutate({ operation, pid });
  };
  console.log(typeof data);
  if (data.productList.length === 0) {
    return (
      <div className="p-4 w-full h-full flex justify-center items-center text-gray-700">
        There are no items in your cart yet
      </div>
    );
  }
  return (
    <div className="p-4 w-full flex justify-center items-center">
      <div className="basis-[70%] w-full flex flex-col gap-10 p-7 px-14">
        {data.productList.map((item: any) => (
          <div key={item.productId._id} className="flex justify-between">
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-bold">{item.productId.name}</p>
              <p className="text-lg italic text-gray-600">
                $ {item.productId.price.toString()}
              </p>
            </div>
            <div>
              <div className="flex justify-center gap-10">
                <Button
                  className="font-bold text-3xl p-2"
                  onClick={() =>
                    changeQuantity("increment", item.productId._id.toString())
                  }
                >
                  +
                </Button>
                <input
                  type="number"
                  className="w-16 text-2xl p-2 font-bold bg-light-1 text-center"
                  disabled
                  min="0"
                  value={item.quantity}
                />
                <Button
                  className="font-bold text-3xl"
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
      <hr className="h-[calc(100vh-350px)] w-[2px] bg-dark-1" />
      <div className="basis-[30%] w-full h-full flex flex-col justify-start items-center text-4xl font-bold">
        Summary
      </div>
    </div>
  );
};

export default InteractiveCartContent;
