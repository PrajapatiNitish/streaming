import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    thumbnail: {
        type: String,
        ref: "thumbnails"
    },
    
    video: {
        type: String,
        ref: "videos"
    }
});

const videoModel = mongoose.model("videos", videoSchema);

export default videoModel;