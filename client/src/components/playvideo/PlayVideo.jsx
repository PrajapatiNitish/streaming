import playvideostyle from "./PlayVideo.module.css";

export default function PlayVideo() {

  return (
    <div id={playvideostyle.playvideo_container}>
      <div id={playvideostyle.video_container}>
        <video src="./test-video-4.mp4" poster="./test-banner-2.jpg" controls />
      </div>
      <div id={playvideostyle.video_suggestion_container}>
        <div id={playvideostyle.suggestion}>
          
        </div>
      </div>
    </div>
  );
}
