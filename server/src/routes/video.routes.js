import express from "express";
import videoController from "../controllers/video.controller.js";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

//create video routes
router.post(
    "/upload", 
    upload.single("video"), //req.file
    videoController.videoUpload
);

export default router;
