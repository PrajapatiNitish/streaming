//Import every necessary packages
import express from "express";
import cors from "cors"

import authRoute from "./routes/auth.routes.js";
import videoRoute from "./routes/video.routes.js";

import cookieParser from "cookie-parser";

//Build App
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

//Express middleware
app.use(express.json()); //To send or recieve data in json formate
app.use(express.urlencoded({ extended: true }));

//use packages
app.use(cookieParser());

//All APIs gate
app.use("/auth", authRoute);
app.use("/video", videoRoute);

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Hello form server!"
    })
})

export default app;
