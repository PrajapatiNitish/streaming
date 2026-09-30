import videoModel from "../models/video.model.js"
import uploadFile from "../services/imagekit.service.js"

async function videoUpload(req, res) {
    const {title, description} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64")); //Upload video

    const video = await videoModel.create({
        title,
        description,
        video: result.url
    })

    res.status(201).json({msg: "Video uploaded"});
}


export default { videoUpload };
