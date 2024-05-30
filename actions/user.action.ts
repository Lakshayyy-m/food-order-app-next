"use server";
import { connect } from "@/db/db";
import User from "@/db/user";
import { currentUser, User as UserType } from "@clerk/nextjs/server";

export const createUser = async (user: any) => {
  try {
    await connect();
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  try {
    await connect();
    const currUser = (await currentUser()) as UserType;
    const user = await User.findOne({ clerkId: currUser.id });
    return user;
  } catch (error) {
    console.log(error);
  }
};
