"use client";
import React, { useEffect, useState } from "react";

const CartContent = () => {
  const [isLoading, setIsLoading] = useState<Boolean>();

  useEffect(() => {
    const fetchCartDetails = () => {};
  }, []);

  return <div className="p-4">CartContent</div>;
};

export default CartContent;
