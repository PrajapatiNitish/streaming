import headerstyle from "./Header.module.scss";

function Header() {
  return (
    <div id={headerstyle.globalheader}>
      <nav id={headerstyle.globalnav}>
        <div id={headerstyle.globalnav_content}>
          <div id={headerstyle.globalnav_item}></div>
          <ul id={headerstyle.globalnav_list}>hello</ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
