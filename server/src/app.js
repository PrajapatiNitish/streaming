//Import every necessary packages
import express from "express";

import authRoute from "./routes/auth.routes.js";
import videoRoute from "./routes/video.routes.js";

import cookieParser from "cookie-parser";

//Build App
const app = express();

//Express middleware
app.use(express.json()); //To send or recieve data in json formate
app.use(express.urlencoded({ extended: true }));

//use packages
app.use(cookieParser());

//All APIs gate
app.use("/auth", authRoute);
app.use("/video", videoRoute);

export default app;