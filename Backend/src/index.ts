import express, {
  json,
  urlencoded,
  Request,
  Response,
  NextFunction,
} from "express";
import createError from "http-errors";
import path from "path";
import url from "url";

import colors from "colors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import cors from "cors";
import dbConnect from "./config/dbConnect";
// import error middleware
import errorHandler from "./middleware/error.middleware";
// import routes
import UsersRoute from "./routes/user.route";
import ChatsRoomRoute from "./routes/chatRoom.route";
import MessagesRoute from "./routes/message.route";

//
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// connect to mongodb
async function startServer() {
  await dbConnect();
  // other server setup code
}
startServer();

// middleware
app.use(cors());

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(static(join(__dirname, "public")));

// routes
app.use("/api/users", UsersRoute);
app.use("/api/chatRooms", ChatsRoomRoute);

app.use("/api/messages", MessagesRoute);

// error middleware
app.use(errorHandler);

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(500);
  res.render("error!");
});

// serve client.
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
//   );
// } else {
//   app.get("/", (req, res) => res.send("You are not in production"));
// }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(PORT, () =>
  console.log(`app running on port http://localhost:${PORT}`)
);
