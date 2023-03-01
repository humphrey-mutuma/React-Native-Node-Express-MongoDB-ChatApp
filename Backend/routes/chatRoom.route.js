import { Router } from "express";
import {
  getAllChatRooms,
  getAChatRoom,
  deleteAChatRoom,
  createAChatRoom,
} from "../controllers/chatRoom.controller.js";
const router = Router();

router.route("/").get(getAllChatRooms).post(createAChatRoom);
router.route("/:chatRoomId").get(getAChatRoom).delete(deleteAChatRoom);

export default router;
