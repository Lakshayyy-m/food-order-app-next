"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const AboutPage = () => {
  return (
    <main className="min-h-[calc(100vh-200px)] w-full flex justify-center items-center flex-col gap-14">
      <section className="w-full flex flex-col justify-center items-center gap-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold max-lg:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#121212] to-[#c23231]"
        >
          Hi, My name is Lakshay Manchanda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-2xl font-semibold w-[80vw] text-center max-lg:text-xl"
        >
          I&apos;m a Full Stack Web developer, I work with the T3 Stach - NextJS
          - TypeScript - TailwindCSS
        </motion.p>
        <motion.p
          className="text-xl flex flex-col justify-center items-center  text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <span>
            You can contact me for all your website needs{" "}
            <Link
              href={"/contact"}
              className="hover:text-red-1 hover:underline"
            >
              here
            </Link>
          </span>
          <br />
          <span>
            and you can know more about me{" "}
            <Link
              href={"https://lakshaymanchanda.vercel.app/"}
              className="hover:text-red-1 hover:underline"
            >
              here
            </Link>
          </span>
        </motion.p>
      </section>
      <motion.section
        className="pt-32 flex flex-col gap-9 justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 5 }}
      >
        <h2 className="text-3xl font-semibold text-center">
          Techonologies used to make this webapp
        </h2>
        <p className="max-md:w-[86vw] text-center">
          NextJS, ReactJS, TypeScript, TailwindCSS, Stripe, React/Tanstack
          Query, Framer-motion, EmailJS, ShadCN
        </p>
      </motion.section>
    </main>
  );
};

export default AboutPage;
