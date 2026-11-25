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

async function thumbnail(req, res) {

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
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere enim voluptas nesciunt unde quos ut blanditiis ipsum temporibus impedit quisquam eveniet in minima, nam nulla? Quam eum voluptas ipsa."
  })
}


export { videoUpload, thumbnail, watch };
