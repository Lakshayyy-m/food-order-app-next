import { createPriceObj, stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { productList, email, userId } = await req.json();
    const priceObjArray = await Promise.all(
      productList.map((item: any) => createPriceObj(item))
    );
    const session = await stripe.checkout.sessions.create({
      metadata: { userId },
      customer_email: email,
      line_items: [...priceObjArray],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
      
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
