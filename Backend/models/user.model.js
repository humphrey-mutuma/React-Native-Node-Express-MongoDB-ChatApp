import { Schema, model } from "mongoose";

// create a user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    image: {
      type: String,
      required: [true, "Please add an image"],
     },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
