import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  productList: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "food_items" },
      quantity: { type: Number },
    },
  ],
});

export const Cart = mongoose.models.cart || mongoose.model("cart", CartSchema);
