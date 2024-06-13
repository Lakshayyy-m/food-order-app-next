"use client";
import { emptyCart } from "@/actions/cart.action";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const [time, setTime] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);

    setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    emptyCart()
  }, [router]);

  return (
    <section className="h-screen w-full flex justify-center items-center flex-col gap-14">
      <h1 className="text-5xl font-bold max-md:text-xl text-black">
        Congratulations! your order has been successfully placed
      </h1>
      <h2 className="text-2xl font-normal text-gray-500 max-md:text-lg">
        redirecting you to the home page in {time}
      </h2>
    </section>
  );
};

export default SuccessPage;
