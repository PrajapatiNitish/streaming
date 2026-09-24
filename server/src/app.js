//Import every necessary library
import express from "express";

//Build App
const app = express();

//Express middleware
app.use(express.json()); //To send or recieve data in json formate
app.use(express.urlencoded({ extended: true }));

//Api works
app.get("/", (req, res) => {
  res.json({ message: "Server is here..." });
});


export default app;