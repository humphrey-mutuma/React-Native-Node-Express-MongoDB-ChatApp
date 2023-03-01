import { Router } from "express";
import {
  createAMessage,
  getAMessage,
  deleteMessage,
} from "../controllers/message.controller.js";
const router = Router();

router.route("/").post(createAMessage);
router.route("/:id").get(getAMessage).delete(deleteMessage);

export default router;
