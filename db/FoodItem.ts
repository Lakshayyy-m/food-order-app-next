import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  description: String,
  category: String,
  nutritional_information: String,
  rating: Number,
  preparation_time: String,
});

// const FoodItemModel = mongoose.model("food_items", FoodItemSchema)

export const FoodItem =
  mongoose.models?.food_items || mongoose.model("food_items", FoodItemSchema);
