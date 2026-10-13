
import videoModel from "../models/video.model.js"
import uploadFile from "../services/imagekit.service.js"

async function videoUpload(req, res) {
  const { title, description } = req.body;
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


export default { videoUpload };
