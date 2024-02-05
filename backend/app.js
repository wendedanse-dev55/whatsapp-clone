import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { router } from "./routes/index.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept",
  );
  next();
});
app.use("/api", router);

app.listen(port, () => {
  mongoose.connect(process.env.MONGODB, { autoIndex: false }).then(() => {
    console.log("check");
  });
});
