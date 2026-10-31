import footerstyle from "./Footer.module.css";
import { Fragment } from "react";

export default function Footer() {
  const connects = [
    {
      key: 1,
      name: "Portfolio",
      link: "https://www.devnitish.com/",
    },

    {
      key: 2,
      name: "Instagram",
      link: "https://www.instagram.com/prajapati.nitish8/",
    },

    {
      key: 3,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/nitish-kumar-4ab304262/",
    },

    {
      key: 4,
      name: "X",
      link: "https://x.com/ernitish45",
    },

    {
      key: 5,
      name: "Github",
      link: "https://github.com/PrajapatiNitish",
    },
  ];

  return (
    <footer id={footerstyle.globalfooter}>
      <div id={footerstyle.globalfooter_content}>
        <h2 id={footerstyle.author}>Nitish Prajapati</h2>
        <ul id={footerstyle.globalfooter_list}>
          {connects.map(({ key, name, link }, idx) => {
            return (
              <Fragment key={key}>
                {idx > 0 && <span className={footerstyle.separator}>|</span>}
                <li>
                  <a href={link}>{name}</a>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
