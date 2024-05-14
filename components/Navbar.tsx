"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between py-6 items-center">
      <div
        className="flex gap-4 items-center h-[80px] bg-dark-1 py-6
 px-8 rounded-e-3xl text-light-1"
      >
        <Image src={"/icons/logo.svg"} alt="lomato" width={40} height={40} />
        <p className="text-4xl font-bold ">
          L<span className="text-red-1">o</span>mat
          <span className="text-red-1">o</span>
        </p>
      </div>
      <div className="flex gap-10 font-semibold max-md:hidden">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
          <Link
            href={"/"}
            className={cn({ "text-red-1": pathname.startsWith("/") })}
          >
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
          <Link
            href={"/menu"}
            className={cn({ "text-red-1": pathname.startsWith("/menu") })}
          >
            Menu
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
          <Link
            href={"/about"}
            className={cn({ "text-red-1": pathname.startsWith("/about") })}
          >
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
          <Link
            href={"/contact"}
            className={cn({ "text-red-1": pathname.startsWith("/contact") })}
          >
            Contact
          </Link>
        </motion.div>
      </div>
      <div className="flex gap-10">
        <Link href={"/cart"} className="flex max-md:hidden">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
            <Image src={"/icons/cart.svg"} alt="cart" width={32} height={32} />
          </motion.button>
        </Link>
        <div className="bg-dark-1 py-6 flex items-center justify-center px-8 rounded-s-3xl h-[80px]">
          <motion.div
            className="text-light-1 font-bold max-md:hidden"
            whileHover={{ scale: 1.04 }}
          >
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </motion.div>
          <motion.div
            className="max-md:hidden flex "
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1 }}
          >
            <SignedIn>
              <UserButton />
            </SignedIn>
          </motion.div>
          <motion.div className="flex items-center justify-center md:hidden">
            <MobileNav />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
