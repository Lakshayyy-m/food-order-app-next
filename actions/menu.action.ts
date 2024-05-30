"use server";
import { connect } from "@/db/db";
import { FoodItem } from "@/db/FoodItem";
import { FoodItemType } from "@/lib/types";
import mongoose from "mongoose";

//fetching all the food items
export const getAllFoodItems = async () => {
  try {
    await connect();
    const foodItems: FoodItemType[] = await FoodItem.find();
    return JSON.stringify(foodItems);
  } catch (error) {
    console.log(error);
  }
};

//fetching food item with ID
export const getFoodItem = async (id: string) => {
  try {
    await connect();
    const foodItem = await FoodItem.findById(id);
    return JSON.stringify(foodItem);
  } catch (error) {
    console.log(error);
  }
};
