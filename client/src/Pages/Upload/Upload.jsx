import uploadStyle from "./Upload.module.scss";
import Input from "../../Components/Input/Input.jsx"
import Button from "../../Components/Button/Button.jsx";

import api from "../../Api/axios.js"

export default function Upload() {
    const uploadFile = async (e) => {
        e.preventDefault();
        const response = await api.get("/");
        console.log(response.data) 
    }

  return (
    <>
      <div className={uploadStyle.upload_page}>
        <form action="" id={uploadStyle.upload_file} onClick={uploadFile}>
          <Input inputId={uploadStyle.videoInput} inputType={"file"} inputAccepts={"video/*"}/>
          <Button buttonName={"Upload"} />
        </form>
      </div>
    </>
  );
}
