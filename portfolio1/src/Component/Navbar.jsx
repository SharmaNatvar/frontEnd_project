import React, { useState } from "react";
import style from "../App.module.css";
import { getImageUrl } from "../imgPath";

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  return (
    <>
      <nav className={style.navbarBg}>
        <a href="/" className={style.navTitle}>
          Sharma
        </a>
        <div className={style.navMenu}>
          <img
            className={style.navMenuBtn}
            src={
              menuBtn
                ? getImageUrl("closeIcon.png")
                : getImageUrl("menuIcon.png")
            }
            alt="menubtn"
            onClick={()=>setMenuBtn(!menuBtn)}
          />
          <ul className={`${style.navMenuItem} ${menuBtn && style.menuOpen}`} onClick={()=>setMenuBtn(false)}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
