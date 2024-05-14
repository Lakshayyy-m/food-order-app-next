"use client";
import { motion } from "framer-motion";

import React, { MouseEventHandler, ReactNode } from "react";

const Button = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
