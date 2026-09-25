//Import every necessary packages
import express from "express";

import videoRoute from "./routes/video.routes.js"

import cookieParser from "cookie-parser"

//Build App
const app = express();

//Express middleware
app.use(express.json()); //To send or recieve data in json formate
app.use(express.urlencoded({ extended: true }));

//use packages
app.use(cookieParser());



app.use("/video", videoRoute);


export default app;