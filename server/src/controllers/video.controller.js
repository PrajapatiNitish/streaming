import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import videoModel from "../models/video.model.js";
import uploadFile from "../services/imagekit.service.js";

const secretKey = process.env.JWT_SECRET;

async function videoUpload(req, res) {
  const token = req.cookies.user;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    const decode = jwt.verify(token, secretKey);
    console.log(decode);
    res.status(202);
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const { title, description, thumbnail } = req.body;
  const file = req.file; // get file from user using multer

  //ffmpeg -> transcoding (144p, 240p, 360p, ..., 8k)

  //hls -> split into chunks

  const result = await uploadFile(file.buffer.toString("base64")); //upload video into storage

  const video = await videoModel.create({
    //upload data into db
    title,
    description,
    video: result.url,
  });

  res.status(201).json({ msg: "Video uploaded" });
}

async function thumbnail(req, res) {
  let token = req.cookies.user;
  const randomId = crypto.randomUUID();

  console.log(randomId);

  if (!token) {
    token = jwt.sign(
      {
        id: randomId,
        role: "user",
      },
      secretKey,
    );
  }

  res.cookie("user", token);

  res.status(200).json([
    {
      id: "1124342h3e33iki3o",
      link: "https://google.com",
      videnname: "Panchayat",
    },

    {
      id: "1124342h3e33ikio6",
      link: "https://microsoft.com",
      videnname: "Panchayat",
    },
    {
      id: "1124342h3e33iki5o",
      link: "https://apple.com",
      videnname: "Panchayat",
    },
  ]);
}

async function watch(req, res) {
  res.status(200).json({
    link: "https://youtube.com",
    name: "panchayat S01 E01",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere enim voluptas nesciunt unde quos ut blanditiis ipsum temporibus impedit quisquam eveniet in minima, nam nulla? Quam eum voluptas ipsa.",
  });
}

export { videoUpload, thumbnail, watch };
