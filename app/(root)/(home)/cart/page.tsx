import CartContent from "@/components/CartContent";
import React from "react";

const CartPage = () => {
  return (
    <section className="min-h-[calc(100vh-300px)]">
      <h1 className="text-6xl font-extrabold text-center">
        C<span className="text-red-1">a</span>r
        <span className="text-red-1">t</span>
      </h1>
      <CartContent />
    </section>
  );
};

export default CartPage;
