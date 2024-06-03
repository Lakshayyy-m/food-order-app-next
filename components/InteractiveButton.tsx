"use client";
import { motion } from "framer-motion";

import React, { MouseEventHandler, ReactNode } from "react";

const Button = ({
  children,
  className,
  onClick,
  disabled,
}: {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1 }}
      disabled={disabled}
      type="button"
    >
      {children}
    </motion.button>
  );
};

export default Button;
