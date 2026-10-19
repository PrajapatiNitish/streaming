import uploadStyle from "./Upload.module.scss";
import Button from "../../Components/Button/Button.jsx";

export default function Upload() {
    const uploadFile = () => {
        console.log("File recieved.")
    }

  return (
    <>
      <div className={uploadStyle.upload_page}>
        <form action="" id={uploadStyle.upload_file} onClick={uploadFile}>
          <input type="file" id={uploadStyle.input} />
          <Button buttonName={"Upload"} />
        </form>
      </div>
    </>
  );
}
