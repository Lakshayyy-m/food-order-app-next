"use client";
import React, { FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/InteractiveButton";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
const ContactPage = () => {
  const formRef = useRef<any>();
  const messageRef = useRef<any>();
  const sendEmailToMe = async (e: FormEvent) => {
    e.preventDefault();
    if (messageRef.current.value.trim() === "") {
      toast("Kindly enter some valid data");
      return;
    }
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID!,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_USERID!
    );
    if (response.status === 200) {
      toast("Email sent successfully!");
      messageRef.current.value = "";
    } else toast("Some error occured");
  };

  return (
    <form
      className="min-h-[calc(100vh-200px)] w-full flex justify-center items-center flex-col gap-10"
      onSubmit={sendEmailToMe}
      ref={formRef}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold max-lg:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#121212] to-[#c23231]"
      >
        Write to me
      </motion.h1>
      <textarea
        ref={messageRef}
        className="w-[50vw] h-[300px] rounded-xl shadow-lg text-2xl p-5 focus:outline-none max-lg:w-[86vw]"
        name="message"
      />
      <Button
        className="w-[30vw] bg-red-1 text-white py-4 font-semibold rounded-xl max-md:text-sm"
        type="submit"
      >
        Send email
      </Button>
    </form>
  );
};

export default ContactPage;
