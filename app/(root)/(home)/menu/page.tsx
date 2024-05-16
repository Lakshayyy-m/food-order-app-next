import { getAllFoodItems } from "@/actions/menu.action";
import MenuGrid from "@/components/MenuGrid";
import { FoodItemType } from "@/lib/types";
import React from "react";

const MenuPage = async () => {
  const foodItems: FoodItemType[] = (await getAllFoodItems())!;
  return (
    <section className="min-h-[calc(100vh-300px)] w-full p-8 grid grid-cols-12 gap-8">
      <MenuGrid foodItems={foodItems} />
    </section>
  );
};

export default MenuPage;
