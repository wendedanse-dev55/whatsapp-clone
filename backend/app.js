import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { router } from "./routes/index.js";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(bodyParser.json());

app.use("/api", router);

app.listen(port, () => {
  mongoose.connect(process.env.MONGODB, { autoIndex: false }).then(() => {
    console.log("check");
  });
});
