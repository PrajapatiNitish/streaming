import { NotFoundError } from "@imagekit/nodejs";
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  title: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  description: {
    type: mongoose.Schema.Types.String,
    default: null,
  },

  thumbnail: {
    type: mongoose.Schema.Types.String,
    ref: "thumbnails",
    default: null,
  },

  video: {
    type: mongoose.Schema.Types.String,
    ref: "videos",
    required: true,
  },
});

const videoModel = mongoose.model("videos", videoSchema);

export default videoModel;
