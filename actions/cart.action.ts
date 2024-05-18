import { Cart } from "@/db/cart";
import { connect } from "@/db/db";

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
