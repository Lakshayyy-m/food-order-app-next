import { getCart } from "@/actions/cart.action";
import InteractiveCartContent from "@/components/InteractiveCartContent";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";

const CartPage = async () => {
  const cart = JSON.parse((await getCart())!);

  return (
    <section className="min-h-[calc(100vh-200px)]">
      <h1 className="text-6xl font-extrabold text-center mb-5">
        C<span className="text-red-1">a</span>r
        <span className="text-red-1">t</span>
      </h1>
      <Suspense fallback={<Loader />}>
        <InteractiveCartContent cart={cart} />
      </Suspense>
    </section>
  );
};

export default CartPage;
