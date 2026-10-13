import { spawn } from "child_process";

async function transcodeVideo(inputPath, outputPath) {
  const ffmpeg = spawn("ffmpeg", ["i", inputPath, outputPath]);

  //start listening for events
  ffmpeg.on("close", (code) => {
    console.log(code);
  });
}

export default transcodeVideo;
