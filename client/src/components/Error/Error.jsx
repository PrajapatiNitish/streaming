import errorstyl from "./Error.module.css";

export default function Error({ status }) {
  return (
    <div id={errorstyl.error_container}>
      <p id={errorstyl.error_msg}>{status} Error</p>
    </div>
  );
}
