"use client";
import { FoodItemType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuItem = ({ item }: { item: FoodItemType }) => {
  return (
    <Link href={`/menu/${item._id}#top`}>
      <motion.div
        className="w-full flex flex-col gap-4 bg-light-2 hover:bg-stone-300 overflow-hidden rounded-xl cursor-pointer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 1 }}
      >
        <Image
          src={"/images/food.jpg"}
          alt="placeholder image"
          className="w-full"
          width={100}
          height={100}
        />
        <div className="p-4 flex flex-col gap-4 py-">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <div className="flex justify-between">
            <h4 className="font-semibold">${item.price.toString()}</h4>
            <h4 className="italic">Rating : {item.rating.toString()} / 5</h4>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default MenuItem;
