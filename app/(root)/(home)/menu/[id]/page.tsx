import { getFoodItem } from "@/actions/menu.action";
import { FoodItemType } from "@/lib/types";
import React from "react";
import ItemPageComponent from "@/components/ItemPageComponent";

const MenuItemPage = async ({ params }: { params: { id: string } }) => {
  const foodItem: FoodItemType = JSON.parse((await getFoodItem(params.id))!);
  console.log("realoading individual food page");
  return <ItemPageComponent foodItem={foodItem} />;
};

export default MenuItemPage;
