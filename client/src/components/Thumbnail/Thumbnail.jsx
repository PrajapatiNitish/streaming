import thumbnailstyle from "./Thumbnail.module.css"

export default function Thumbnail({thumbnail}) {
  return (
    <a href="/" id={thumbnailstyle.card}>
      <img id={thumbnailstyle.thumbnail} src={thumbnail} alt="" />
    </a>
  );
}
