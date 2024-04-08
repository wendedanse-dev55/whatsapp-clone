import mongoose from "mongoose";
import UserModel from "../../models/auth/index.js";
import jwt from "jsonwebtoken";
import twilio from "twilio";
import { config } from "./constants.js";
import dayjs from "dayjs";
const twilioClient = twilio(config.accountSid, config.token);

class User {
  authController = async (req, res) => {
    try {
      const { phone } = req.body;
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      await twilioClient.messages.create({
        from: "+17548022623",
        to: `+${phone}`,
        body: `Ваш код ${code}`,
      });
      await UserModel.updateOne(
        { phone },
        { verificationCode: code, verificationTime: new Date() },
        { upsert: true },
      );

      return res.status(200).json({ message: "Code sent successfully" });
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  };

  verifyCodeController = async (req, res) => {
    try {
      const { phone, code } = req.body;
      const user = await UserModel.findOne({ phone });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (user.verificationCode === code) {
        const token = jwt.sign(user.toObject(), "kutman", { expiresIn: "1h" });

        res.cookie("api-auth", token, {
          httpOnly: true,
          maxAge: 900000,
        });
        setTimeout(() => {
          return res.json({ message: "Welcome Back!", user: user });
        }, 500);
      } else {
        res.status(401).json({ error: "Invalid code or expired" });
      }
    } catch (e) {
      console.log("eeee", e.message);
      return res.status(400).json({ message: e });
    }
  };

  me = async (req, res) => {
    try {
      const { phone } = req.body;
      const user = await UserModel.findOne({ phone });
      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  };
}

export const { authController, verifyCodeController, me } = new User();
