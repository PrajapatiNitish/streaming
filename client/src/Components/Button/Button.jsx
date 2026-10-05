import buttonStyle from "./Button.module.scss";

export default function Button({buttonName}) {
  return (
    <>
      <span className={buttonStyle.global_button}>
        <button>{buttonName}</button>
      </span>
    </>
  );
}