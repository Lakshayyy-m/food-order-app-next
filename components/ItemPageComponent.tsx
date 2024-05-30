"use client";
import React, { useEffect, useState } from "react";
import Button from "./InteractiveButton";
import Image from "next/image";
import { Indie_Flower } from "next/font/google";
import { FoodItemType } from "@/lib/types";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { addItemToCart } from "@/actions/cart.action";

const indie = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const ItemPageComponent = ({ foodItem }: { foodItem: FoodItemType }) => {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const addToCart = async () => {
    
    await addItemToCart(foodItem._id, counter);
    toast("Item added to cart");
  };

  useEffect(() => {
    if (counter > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [counter]);

  return (
    <section
      className={`min-h-[calc(100vh-100px)] flex w-full py-10 ${indie.className} max-md:flex-col `}
    >
      <motion.div
        className="basis-[50%] h-full flex justify-end items-center max-md:justify-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative aspect-video h-[300px]] w-[80%] max-w-[500px] rounded-2xl ">
          <Image
            src={"/images/food.jpg"}
            alt="foodItem"
            fill
            className="object-contain rounded-[30px] -z-20 "
          />
        </div>
      </motion.div>
      <div className="basis-[50%] max-md:flex max-md:justify-center max-md:relative max-md:-top-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[80%] flex flex-col gap-10 shadow-md shadow-slate-400 border border-slate-700 border-dotted rounded-lg p-5 py-20 relative max-md:static -left-14 -top-10 bg-light-1"
        >
          <div className="relative flex flex-col justify-center items-center ">
            <h1 className="absolute text-3xl px-4 font-bold text-center w-fit bg-light-1">
              {foodItem.name}
            </h1>
            <hr className="h-1 bg-dark-1 w-full" />
          </div>
          <p className="text-stone-600 italic">{foodItem.description}</p>
          <div className="flex justify-between items-center flex-wrap">
            <p className="font-semibold italic">
              Price : $ {foodItem.price.toString()}
            </p>
            <p className="font-semibold italic">
              Category : {foodItem.category}
            </p>
          </div>
          <p className="font-semibold italic">
            Nutritional Facts : {foodItem.nutritional_information}
          </p>
          <div className="flex justify-between flex-wrap">
            <p className="font-semibold italic">
              Coooking Time : {foodItem.preparation_time}
            </p>
            <p className="font-semibold italic">
              Rating : {foodItem.rating.toString()} / 5
            </p>
          </div>
          <div className="flex justify-center gap-10">
            <Button
              className="font-bold text-2xl p-2"
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
            >
              +
            </Button>
            <input
              type="number"
              className="w-16 text-2xl p-2 font-bold bg-light-1 text-center"
              disabled
              min="0"
              value={counter}
            />
            <Button
              className="font-bold text-2xl"
              onClick={() =>
                setCounter((prev) => (prev === 0 ? prev : prev - 1))
              }
            >
              -
            </Button>
          </div>
          <Button
            className={cn("font-bold", { "text-gray-500": isDisabled })}
            onClick={addToCart}
            disabled={isDisabled}
          >
            + Add to Cart
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ItemPageComponent;
