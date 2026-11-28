import jwt from "jsonwebtoken";
import videoModel from "../models/video.model.js";
import userModel from "../models/user.model.js";
import { randomUUID } from "node:crypto";
import uploadFile from "../services/imagekit.service.js";

const secretKey = process.env.JWT_SECRET;

async function videoUpload(req, res) {
  const token = req.cookies.ROLLOUT_TOKEN;
  const decode = {};

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    decode = jwt.verify(token, secretKey);
    res.status(202);
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const { title, description, thumbnail } = req.body;
  const userId = () => {
    console.log(decode);
  }
  const file = req.file; // get file from user using multer

  //ffmpeg -> transcoding (144p, 240p, 360p, ..., 8k)

  //hls -> split into chunks

  const result = await uploadFile(file.buffer.toString("base64")); //upload video into storage

  const video = await videoModel.create({
    //upload data into db
    userId,
    title,
    description,
    thumbnail,
    video: result.url,
  });

  res.status(201).json({ msg: "Video uploaded" });
}

async function thumbnail(req, res) {
  let token = req.cookies.token;
  const randomId = randomUUID();

  if (!token) {
    token = jwt.sign(
      {
        id: randomId,
        role: "user",
      },
      secretKey,
    );
  }

  res.cookie("ROLLOUT_TOKEN", token);

  const randomVideos = await videoModel.aggregate([{$sample: {size: 9}}]);

  res.status(200).json(randomVideos);
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
