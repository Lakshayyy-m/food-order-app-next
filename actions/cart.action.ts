"use server";
import { Cart } from "@/db/cart";
import { connect } from "@/db/db";
import { getCurrentUser } from "./user.action";
import { UserType } from "@/lib/types";
import { revalidatePath } from "next/cache";

export const createCart = async (id: string) => {
  try {
    await connect();
    const newCart = await Cart.create({
      userId: id,
      productList: [],
    });
    return newCart;
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    await connect();
    const currUser = (await getCurrentUser()) as UserType;
    const cartItem = await Cart.findOne({
      userId: currUser._id,
    }).populate({ path: "productList", populate: { path: "productId" } });
    return JSON.stringify(cartItem);
  } catch (error) {
    console.log(error);
  }
};
//!!!!!PAGE SORT OF REFERESHES ON ADD TO CART AND ALSO THE CART IS NOT GETTING UPDATED ON PRODUCT ADD
export const addItemToCart = async (pid: string, quantity: number) => {
  try {
    await connect();

    const currUser = (await getCurrentUser()) as UserType;
    const cart = await Cart.findOne({
      userId: currUser._id,
    });

    let flag = false;
    let index: number | undefined;
    cart.productList.map((item: any, ind: number) => {
      if (item.productId._id.toString() === pid) {
        flag = true;
        index = ind;
      }
    });

    if (flag) {
      cart.productList[index!].quantity += quantity;
      await cart.save();
      revalidatePath("/cart");
      return { success: "Quantity Updated" };
    }
    await Cart.findByIdAndUpdate(cart._id, {
      $push: { productList: { productId: pid, quantity } },
    });
    revalidatePath("/cart");
    return { success: "Added item to cart" };
  } catch (error) {
    console.log(error);
  }
};

export const updateQuantity = async ({
  operation,
  pid,
}: {
  operation: "increment" | "decrement";
  pid: string;
}) => {
  let index;
  try {
    await connect();
    const currUser = (await getCurrentUser()) as UserType;
    const cart = await Cart.findOne({
      userId: currUser._id,
    });
    cart.productList.map((item: any, ind: number) => {
      if (item.productId.toString() === pid) {
        index = ind;
      }
    });

    if (operation === "decrement") {
      if (cart.productList[index!].quantity === 1) {
        cart.productList.splice(index, 1);
      } else {
        cart.productList[index!].quantity -= 1;
      }
    } else {
      cart.productList[index!].quantity += 1;
    }
    await cart.save();
    // revalidatePath("/cart");
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const emptyCart = async () => {
  try {
    await connect();
    const currUser = (await getCurrentUser()) as UserType;
    const cart = await Cart.findOne({
      userId: currUser._id,
    });
    cart.productList = [];
    cart.save();
    revalidatePath("/cart");
  } catch (error) {
    console.log(error);
  }
};
