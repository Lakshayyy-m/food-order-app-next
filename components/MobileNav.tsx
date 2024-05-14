import React from "react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <Image
            src={"/icons/nav.svg"}
            alt="navigation"
            width={32}
            height={32}
          />
        </SheetTrigger>
        <SheetContent side={"bottom"} className="flex flex-col pt-16">
          <div className="w-full flex justify-between">
            <Link href={"/cart"}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
              >
                <Image
                  src={"/icons/cart.svg"}
                  alt="cart"
                  width={32}
                  height={32}
                />
              </motion.button>
            </Link>
            <motion.div
              className="text-black font-bold flex items-center justify-center"
              whileHover={{ scale: 1.04 }}
            >
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </motion.div>
            <SignedIn>
              <motion.div
                className="md:hidden font-bold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
              >
                <SignOutButton />
              </motion.div>
            </SignedIn>
          </div>
          <div className="flex gap-10 font-semibold md:hidden justify-center">
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
                className={cn({
                  "text-red-1": pathname.startsWith("/about"),
                })}
              >
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
              <Link
                href={"/contact"}
                className={cn({
                  "text-red-1": pathname.startsWith("/contact"),
                })}
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
