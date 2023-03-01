import { Schema, model } from "mongoose";

// create a user schema
const messageSchema = new Schema(
  {
    messageWriter: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    message: {
      type: String,
      required: [true, "Please add a message"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Message", messageSchema);
