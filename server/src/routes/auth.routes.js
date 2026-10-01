import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

//create auth routes
router.post("/user", authController.registerUser);
router.post("/user/login", authController.loginUser);

export default router;
