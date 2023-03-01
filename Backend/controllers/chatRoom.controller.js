import asyncHandler from "express-async-handler";
import ChatRoom from "../models/chatRoom.model.js";

// @desc create a char room
// @route POST /api/chatRoom
// @access Private

const createAChatRoom = asyncHandler(async (req, res) => {
  // destructure message & writer
  const { chatRoomCreator, name } = req.body;
  if (!chatRoomCreator || !name) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const newChatRoom = await ChatRoom.create({ chatRoomCreator, name });
  if (newChatRoom) {
    return res.status(201).json(newChatRoom);
  } else {
    return res
      .status(500)
      .json({ message: "Something went wrong! Try again later" });
  }
});

// @desc get a chat room
// @route GET /api/chatsRoom
// @access Public

const getAllChatRooms = asyncHandler(async (req, res) => {
  const chat_rooms = await ChatRoom.find({}).lean();
  if (chat_rooms) {
    return res.status(200).json(chat_rooms);
  } else {
    return res
      .status(400)
      .json({ message: "Something went wrong! Try again later" });
  }
});

// @desc get a chat room
// @route GET /api/chatRoom/:id
// @access public
const getAChatRoom = asyncHandler(async (req, res) => {
  const chat_room = await ChatRoom.findById(req.params.id).lean();
  if (chat_room) {
    return res.status(200).json(chat_room);
  } else {
    return res
      .status(400)
      .json({ message: "Something went wrong! Try again later" });
  }
});

// @desc  delete a chat room
// @route DELETE  /api/chatRoom/:id
// @access private
const deleteAChatRoom = asyncHandler(async (req, res) => {
  // chatRoomCreator will be the id of the currently signed in user
  // this can be sent from the from end or even better extracted from the Bearer token,
  //  which can be set up in the middleware
  const { chatRoomCreator } = req.body;
  // fetch chatRoom to delete
  const chat_room = await ChatRoom.findOne(
    { _id: req.params.id },
    "chatRoomCreator"
  ).lean();
  // verify ownership
  if (chatRoomCreator == chat_room.chatRoomCreator.toString()) {
    const chat_room_to_delete = await ChatRoom.deleteOne({
      _id: req.params.id,
    });
    if (chat_room_to_delete) {
      res.status(200).json({
        success: true,
      });
    }
  } else {
    return res.status(401).json({
      message: "You are not authorized!",
    });
  }
});

export { getAllChatRooms, getAChatRoom, deleteAChatRoom, createAChatRoom };
