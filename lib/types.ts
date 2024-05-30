import mongoose from "mongoose";

export type FoodItemType = {
  _id: string;
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
      productId: string;
      quantity: number;
    }
  ];
};

export type UserType = {
  _id: string;
  clerkId: string;
  email: string;
  photo: string;
  firstName: string;
  lastName: string;
};
