import mongoose from "mongoose";
import { FoodItem } from "./FoodItem";

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  productList: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: FoodItem },
      quantity: { type: Number },
    },
  ],
});

export const Cart = mongoose.models?.cart || mongoose.model("cart", CartSchema);
