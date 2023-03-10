import { Router } from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUsers,
  deleteUser,
} from "../controllers/user.controller";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(getAllUsers);
router.route("/:id").get(getUserProfile).delete(deleteUser);

export default router;
