import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const User = mongoose.models?.User || mongoose.model("users", userSchema);

export default User;
