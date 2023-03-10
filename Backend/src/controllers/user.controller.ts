import User from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import mongoose from "mongoose";

// @desc register a user
// @route POST /api/users
// @access Public

export const registerUser = async (req: Request, res: Response) => {
  const { username, image, password } = req.body;

  // check if there is a username
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required! " });
  }

  // check if the user already exists in the database
  const userAlreadyExists = await User.findOne({ username: username }).lean();

  if (userAlreadyExists) {
    return res
      .status(400)
      .json({ message: "User with that username already exists!" });
  }

  // hash user passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // register a user
  try {
    const newUser = await User.create({
      username,
      image,
      password: hashedPassword,
    });
    return res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      image: newUser.image,
      token: generateToken(newUser._id),
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong! Try again later" });
  }
};

// @desc login a user
// @route POST /api/users/login
// @access Public
export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // check if there is a username
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required! " });
  }

  // find user with this username
  const user = await User.findOne({ username: username });

  // user does not exists
  if (!user) {
    return res
      .status(400)
      .json({ message: "user does not exist! please register " });
  }

  // return user data
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.status(200).json({
      id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    return res.status(401).json({ message: "You are not authorized!" });
  }
};

// @desc get a users profile
// @route GET /api/users/:id
// @access Private
export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id, "-password").lean();
  if (user) {
    return res.status(200).json(user);
  } else {
    return res
      .status(400)
      .json({ message: "Something went wrong! Try again later" });
  }
};

// @desc get all users
// @route GET /api/users
// @access public
export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({}, "-password").lean();
  if (users) {
    return res.status(200).json(users);
  } else {
    return res
      .status(400)
      .json({ message: "Something went wrong! Try again later" });
  }
};

// @desc  delete a user
// @route DELETE  /api/users/:id
// @access private
export const deleteUser = async (req: Request, res: Response) => {
  // NB: verify Bearer token sent here before deleting a user
  const user = await User.deleteOne({ _id: req.params.id });
  if (user) {
    res.status(200).json({
      success: true,
    });
  }
};

// Generate a JWT that expires after 30 days
const generateToken = (id: mongoose.Types.ObjectId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
