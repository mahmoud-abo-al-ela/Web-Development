import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import helmet from "helmet";
import sanitizeHtml from "sanitize-html";
import mongoSanitize from "express-mongo-sanitize";

import authenticateUser from "./middleware/auth.js";

const app = express();
dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use((req, res, next) => {
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === "string") {
        req.body[key] = sanitizeHtml(req.body[key]);
      }
    }
  }
  next();
});
app.use(mongoSanitize());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  } catch (err) {
    console.error(err);
  }
};

start();
