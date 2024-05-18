"use client";
import { FoodItemType } from "@/lib/types";
import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const MenuGrid = ({ foodItems }: { foodItems: FoodItemType[] }) => {
  return (
    <>
      {foodItems.map((foodItem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index }}
          className="col-span-3 max-md:col-span-12"
        >
          <MenuItem item={foodItem} />
        </motion.div>
      ))}
    </>
  );
};

export default MenuGrid;
