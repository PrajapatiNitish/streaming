import headerStyle from "./Header.module.scss";
import Button from "../../Components/Button/Button.jsx";

export default function Header() {
  return (
    <>
      {/* Entery point of Header */}
      <div className={headerStyle.global_header}>
        <h1 id={headerStyle.global_header_name}>Streaming</h1>

        {/* Navbar */}
        {/* If sign in is success then Write the username */}
        <span className={headerStyle.sign_up}>
          <Button buttonName={"Dark"} />
          <Button buttonName={"Sign Up"}/>
        </span>
      </div>
    </>
  );
}
