import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  description: String,
  category: String,
  nutritional_information: String,
  rating: Number,
  preparation_time: String,
});

export const FoodItem = mongoose.model("food_items", foodItemSchema);
