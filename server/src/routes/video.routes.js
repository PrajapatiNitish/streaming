import express from "express";
import {videoUpload, thumbnail, watch} from "../controllers/video.controller.js";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

//create video routes
router.post(
    "/upload", 
    upload.single("video"), //req.file
    videoUpload
);

router.get("/thumbnail", thumbnail);

router.get("/watch", watch);

export default router;
