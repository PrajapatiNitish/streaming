import bannerstyle from "./Banner.module.css";

export default function Banner({ videoname, thumbnail }) {
  return (
    <div id={bannerstyle.banner_container}>
      <a href="" id={bannerstyle.card}>
        <img id={bannerstyle.thumbnail} src={thumbnail} alt="" />
      </a>

      <div id={bannerstyle.card_details}>
        <h2>- {videoname}</h2>
        <p>More about videos. Like description or facts </p>
      </div>
    </div>
  );
}
