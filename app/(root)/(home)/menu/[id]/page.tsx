import { getFoodItem } from "@/actions/menu.action";
import { FoodItemType } from "@/lib/types";
import React, { Suspense } from "react";
import ItemPageComponent from "@/components/ItemPageComponent";
import Loading from "@/app/loading";

const MenuItemPage = async ({ params }: { params: { id: string } }) => {
  const foodItem: FoodItemType = JSON.parse((await getFoodItem(params.id))!);

  return (
    <Suspense fallback={<Loading />}>
      <ItemPageComponent foodItem={foodItem} />;
    </Suspense>
  );
};

export default MenuItemPage;
