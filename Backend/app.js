import express, { json, urlencoded } from "express";
import createError from "http-errors";
import path from "path";
import url from "url";

import colors from "colors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import cors from "cors";
import dbConnect from "./config/dbConnect.js";
// import error middleware
import errorHandler from "./middleware/error.middleware.js";
// import routes
import UsersRoute from "./routes/user.route.js";
import ChatsRoomRoute from "./routes/chatRoom.route.js";
import MessagesRoute from "./routes/message.route.js";
 
//
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// connect to mongodb
await dbConnect();

// middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(static(join(__dirname, "public")));

// routes
app.use("/api/users", UsersRoute);
app.use("/api/chats", ChatsRoomRoute);
app.use("/api/messages", MessagesRoute);

// error middleware
app.use(errorHandler);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// serve client.
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("You are not in production"));
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(PORT, () =>
  console.log(`app running on port http://localhost:${PORT}`.blue)
);
