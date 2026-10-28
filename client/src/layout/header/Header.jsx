import headerstyle from "./Header.module.css";

function Header() {
  return (
    <div id={headerstyle.globalheader}>
      <nav id={headerstyle.globalnav}>
        <div id={headerstyle.globalnav_content}>
          <h1 id={headerstyle.globalnav_head}>Streaming</h1>
          <ul id={headerstyle.globalnav_list}>
           <li>Streaming</li>
           <li>Sign-up</li>
           <li>hello</li>
           <li>nope</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
