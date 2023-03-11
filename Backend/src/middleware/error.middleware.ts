import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV == "production" ? null : err.stack,
  });
  next();
};

export default errorHandler;
