import descriptionstyle from "./Description.module.css"

export default function Description({videoname}) {
  return (
    <div id={descriptionstyle.card_details}>
      <h3>- {videoname}</h3>
      <p>More about videos. Like description or facts </p>
    </div>
  );
}
