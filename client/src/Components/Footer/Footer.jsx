// import { useState } from "react";
import footerStyle from "./Footer.module.scss";
import AnchorTag from "../Anchors/Anchors";

export default function Footer() {
  const links = [
    {
      name: "X",
      link: "https://x.com/ernitish45?t=CGixPy8FdDM4eDHgMMXnGw&s=09",
    },

    {
      name: "Instagram",
      link: "www.instagram.com",
    },

    {
      name: "Leetcode",
      link: "https://leetcode.com/u/Prajapatinitsh8/",
    },

    {
      name: "GitHub",
      link: "https://github.com/PrajapatiNitish",
    },
  ];
  return (
    <>
      <div className={footerStyle.global_footer}>
        <div className={footerStyle.developer_name}>Nitish Prajapati</div>

        {/* Social Media links */}
        <div className={footerStyle.social_media}>
          {links.map((link) => {
            return (
              <>
                <AnchorTag
                  key={link.name}
                  anchorName={link.name}
                  anchorLink={link.link}
                />
                |
              </>
            );
          })}

          {/* Portfolio Website. */}
          <AnchorTag
            anchorName={"Portfolio-Website"}
            anchorLink={"https://www.devnitish.com/"}
          />
        </div>

        <div className={footerStyle.feedback}>
          <AnchorTag 
            anchorName={"Give me your valuable feedback. | Click Me"} 
            anchorLink={"./Feedback"} 
          />
        </div>

        {/* copyright */}
        <div className={footerStyle.copyright}>
          Copyright © 2026 Nitish Prajapati. All rights reserved.
        </div>
      </div>
    </>
  );
}
