import api from "../../api/axios.js";
import videosstyle from "./GetVideos.module.css";
import Banner from "../../components/Banner/Banner.jsx";
import PlayVideo from "../../components/PlayVideo/PlayVideo.jsx";
import Error from "../../components/Error/Error.jsx";
import { useState, useEffect } from "react";
import Upload from "../Upload/Upload.jsx"

export default function GetVideos() {
  const [thumbnails, setThumbnail] = useState([]);

  // useEffect(() => {
    
  // });

  return (
    <div id={videosstyle.videos_container}>
      <div id={videosstyle.videos_subcontainer}>
        {thumbnails.map(({ key, name, thumbnail }) => {
          return <Banner key={key} videoname={name} thumbnail={thumbnail} />;
        })}

      </div>
    </div>
  );
}
