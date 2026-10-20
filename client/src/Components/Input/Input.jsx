import inputStyle from "./Input.module.scss";

export default function Input({ inputType, inputId, inputAccepts }) {
  return (
    <>
      <input
        type={inputType}
        className={inputStyle.input}
        id={inputId}
        accept={inputAccepts}
      />
    </>
  );
}
