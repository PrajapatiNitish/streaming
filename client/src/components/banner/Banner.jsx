import bannerstyle from "./Banner.module.css";
import Description from "../Description/Description.jsx";
import Thumbnail from "../Thumbnail/Thumbnail.jsx";

export default function Banner({ videoname, thumbnail }) {
  return (
    <div id={bannerstyle.banner_container}>
      <Thumbnail thumbnail={thumbnail} />

      <Description videoname={videoname} />
    </div>
  );
}
