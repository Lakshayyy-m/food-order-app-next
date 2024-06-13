import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const createPriceObj = async (item: any) => {
  const newProduct = await stripe.prices.create({
    currency: "usd",
    unit_amount: item.productId.price * 100,
    product_data: {
      name: item.productId.name,
    },
  });
  return { price: newProduct.id, quantity: item.quantity };
};
