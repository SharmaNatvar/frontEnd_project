import React from "react";
import style from "../App.module.css";
import { getImageUrl } from "../imgPath";

const Home = () => {
  return (
    <>
      <section className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>Hello I'm Sharma</h1>
          <p className={style.desc}>
            Excited to explore web development! Ready to take on challenges,
            learn & contribute to cool projects. Let's build something awesome!
          </p>
          <a className={style.contactBtn} href="mailto:krish997854@gmail.com">Contact Me</a>
        </div>

        <img className={style.heroImg} src={getImageUrl("profile1.jpg")} alt="hero image" />
        <div className={style.topBlur}></div>
        <div className={style.bottomBlur} ></div>
      </section>
    </>
  );
};

export default Home;
