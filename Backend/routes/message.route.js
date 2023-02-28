import { Router } from "express";
import { getAMessage, deleteMessage } from "../controllers/message.controller";
const router = Router();

router.route("/:messageId").get(getAMessage).delete(deleteMessage);

export default router;
