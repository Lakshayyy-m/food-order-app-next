import mongoose from "mongoose";

export type FoodItemType = {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  nutritional_information: string;
  rating: number;
  preparation_time: string;
};

export type CartItem = {
  _id: string;
  userId: string;
  productList: [
    {
      productId: string
      quantity: number;
    }
  ];
};
