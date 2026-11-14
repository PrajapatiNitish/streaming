import videosstyle from "./GetVideos.module.css";
import Banner from "../../components/banner/Banner.jsx";

export default function GetVideos() {
  const videos = [
    {
      key: 1,
      video: "Panchayat",
      thumbnail: "./test-banner.jpg",
    },

    {
      key: 2,
      video: "Gullak",
      thumbnail: "./test-banner-2.jpg",
    },

    {
      key: 3,
      video: "Permament Romement",
      thumbnail: "./test-banner.jpg",
    },
  ];

  return (
    <div id={videosstyle.videos_container}>
      <div id={videosstyle.videos_subcontainer}>
        {videos.map(({key, video, thumbnail }) => {
          return (
            <Banner
              key={key}
              videoname={video}
              thumbnail={thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
