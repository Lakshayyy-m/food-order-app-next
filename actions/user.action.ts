import { connect } from "@/db/db";
import User from "@/db/user";

export const createUser = async (user: any) => {
  try {
    await connect();
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};
