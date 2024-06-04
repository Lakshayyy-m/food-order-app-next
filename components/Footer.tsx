"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-full flex bg-dark-1 py-10 max-lg:flex-col max-lg:px-5 max-lg:gap-10 text-center mt-20">
      <div className="flex flex-col basis-[50%]">
        <div className="flex gap-4 items-center h-[80px] py-6 px-8 text-light-1">
          <Image src={"/icons/logo.svg"} alt="lomato" width={40} height={40} />
          <p className="text-4xl font-bold ">
            L<span className="text-red-1">o</span>mat
            <span className="text-red-1">o</span>
          </p>
        </div>
        <div className="flex gap-8 px-20">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
            <Link href={"https://github.com/Lakshayyy-m"}>
              <Image
                src={"/icons/github.svg"}
                alt="github"
                width={20}
                height={20}
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
            <Link href={"https://www.linkedin.com/in/lakshaymanchanda033/"}>
              <Image
                src={"/icons/linkedin.svg"}
                alt="linkedin"
                width={20}
                height={20}
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }}>
            <Link href={"https://lakshaymanchanda.vercel.app/"}>
              <Image
                src={"/icons/portfolio.svg"}
                alt="portfolio"
                width={20}
                height={20}
              />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="text-white basis-[50%] md:px-20 md:text-xl">
        <h1>
          If you want a web-application just like this, contact me on the social
          links provided or send me a mail{" "}
          <Link
            href={"mailto:lakshaymanchanda03@gmail.com"}
            className="hover:underline text-red-1"
          >
            here
          </Link>{" "}
          and we can schedule a meeting
        </h1>
      </div>
    </section>
  );
};

export default Footer;
