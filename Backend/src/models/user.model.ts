import { Schema, model } from "mongoose";

// create a user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
