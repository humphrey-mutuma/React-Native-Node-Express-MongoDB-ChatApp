import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI NOT FOUND");
}

let cached: {
  conn: Connection | null;
  promise: Promise<mongoose.Mongoose> | null;
} = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Connection> {
  if (cached.conn) {
    console.log(`MongoDB connected successfully`);
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log(`MongoDB connected successfully`);
      return mongoose;
    });
  }
  cached.conn = (await cached.promise).connection;
  return cached.conn;
}

export default dbConnect;
