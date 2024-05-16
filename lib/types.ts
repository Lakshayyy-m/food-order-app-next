import mongoose from "mongoose";

export type FoodItemType = {
  _id: mongoose.ObjectId;
  name: string;
  imageUrl: string;
  price: Number;
  description: string;
  category: string;
  nutritional_information: string;
  rating: Number;
  preparation_time: string;
};
