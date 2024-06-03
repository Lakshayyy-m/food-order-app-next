import { getFoodItem } from "@/actions/menu.action";
import { FoodItemType } from "@/lib/types";
import React from "react";
import ItemPageComponent from "@/components/ItemPageComponent";

const MenuItemPage = async ({ params }: { params: { id: string } }) => {
  const foodItem: FoodItemType = JSON.parse((await getFoodItem(params.id))!);
  return <ItemPageComponent foodItem={foodItem} />;
};

export default MenuItemPage;
