import { Schema, model } from "mongoose";

// create a user schema
const chatRoomSchema = new Schema(
  {
    chatRoomCreator: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    chats: [
      //array of messages in a chatRoom
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("ChatRoom", chatRoomSchema);
