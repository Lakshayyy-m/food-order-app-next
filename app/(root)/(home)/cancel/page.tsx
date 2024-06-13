"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CancelPage = () => {
  const router = useRouter();
  const [time, setTime] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 8000);

    setInterval(() => {
      setTime((prev) => {
        if (prev !== 1) return prev - 1;
        else return prev;
      });
    }, 1000);
  }, [router]);

  return (
    <section className="h-screen w-full flex justify-center items-center flex-col gap-14">
      <h1 className="text-5xl font-bold max-md:text-xl text-black">
        Unfortunately, your order couldn&apos;t be placed, kindly try again.
      </h1>
      <h2 className="text-2xl font-normal text-gray-500 max-md:text-lg">
        redirecting you to the home page in {time}
      </h2>
    </section>
  );
};

export default CancelPage;
