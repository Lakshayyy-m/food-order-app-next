"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#c23231"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
