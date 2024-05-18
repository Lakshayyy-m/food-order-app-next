"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#c23231"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loading;
