import anchorStyle from "./Anchors.module.scss";

export default function Anchors({anchorLink, anchorName}) {
  return (
    <>
      <span className={anchorStyle.anchors}>
        <a className={anchorStyle.anchor} href={anchorLink} target="_blank">{anchorName}</a>
      </span>
    </>
  )
}