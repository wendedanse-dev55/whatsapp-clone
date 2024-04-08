import express from "express";
import {authController, me, verifyCodeController} from "../controller/auth/index.js"
const router = express.Router();





router.post("/auth", authController);
router.post("/verify-code", verifyCodeController);
router.get("/me", me);



export {router};