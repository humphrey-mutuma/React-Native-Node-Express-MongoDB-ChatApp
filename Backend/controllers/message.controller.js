import asyncHandler from "express-async-handler";
import Message from "../models/message.model.js";

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
// @access private (implement for protected routes here)
const deleteMessage = asyncHandler(async (req, res) => {
  const deleted_message = await Message.deleteOne({ _id: req.params.id });
  if (deleted_message) {
    res.status(200).json({
      success: true,
    });
  }
});

export { getAMessage, deleteMessage };
