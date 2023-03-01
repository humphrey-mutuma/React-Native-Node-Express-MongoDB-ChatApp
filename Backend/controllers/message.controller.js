import asyncHandler from "express-async-handler";
import Message from "../models/message.model.js";
import ChatRoom from "../models/chatRoom.model.js";

// @desc create a message
// @route POST /api/messages
// @access Private

const createAMessage = asyncHandler(async (req, res) => {
  // destructure message & writer
  const { message, messageWriter, messageChatRoom } = req.body;
  if (!message || !messageWriter || !messageChatRoom) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const newMessage = await Message.create({ message, messageWriter });
  if (newMessage) {
    // update associated chatRoom with the new message id reference
    ChatRoom.updateOne(
      { _id: messageChatRoom },
      {
        $push: { chats: newMessage._id },
      },
      { upsert: false, new: true, runValidators: true },
      (err, chat_room) => {
        if (err) {
          return res.status(400).json({ success: false });
        }
        // return the new message created
        return res.status(200).json({ data: newMessage, chat_room: chat_room });
      }
    );
  } else {
    return res
      .status(500)
      .json({ message: "Something went wrong! Try again later" });
  }
});

// @desc get a particular message
// @route GET /api/messages/:messageId
// @access Public

const getAMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id).lean();
  if (message) {
    return res.status(200).json(message);
  } else {
    return res
      .status(400)
      .json({ message: "Something went wrong! Try again later" });
  }
});

// @desc  delete a message
// @route DELETE  /api/messages/:id
// @access private (implement for protected routes in the middleware here)
const deleteMessage = asyncHandler(async (req, res) => {
  const { messageWriter } = req.body;
  if (!messageWriter) {
    return res.status(400).json({ message: "Message Writer is required!" });
  }

  // fetch message to delete and return only the _id
  const message_to_delete = await Message.findById(
    req.params.id,
    "messageWriter -_id"
  ).lean();

  // verify ownership
  if (messageWriter == message_to_delete.messageWriter.toString()) {
    const deleted_message = await Message.deleteOne({ _id: req.params.id });
    if (deleted_message) {
      res.status(200).json({
        success: true,
      });
    }
  } else {
    return res.status(401).json({ message: "You are not authorized" });
  }
});

export { createAMessage, getAMessage, deleteMessage };
