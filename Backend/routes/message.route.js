import { Router } from "express";
import {
  createAMessage,
  getAMessage,
  deleteMessage,
} from "../controllers/message.controller";
const router = Router();

router.route("/").post(createAMessage);
router.route("/:messageId").get(getAMessage).delete(deleteMessage);

export default router;
