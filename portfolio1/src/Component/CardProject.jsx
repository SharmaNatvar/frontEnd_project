import React from "react";
import { getImageUrl } from "../imgPath";
import style from "../App.module.css";


const CardProject = ({project}) => {

const { imgSrc , title , desc ,skill ,demo,source} = project 

  return (
    <>
      <div className={style.prjCard}>
        <img src={getImageUrl(imgSrc)} alt={title} className={style.prjCardImg}/>
        <h3 className={style.prjCardH3}>{title}</h3>
        <p className={style.prjCardp}>{desc}</p>
        <ul className={style.prjCardSkills}>
          {skill.map((skills, id) => {
            return <li key={id} className={style.prjCardli}>{skills}</li>;
          })}
        </ul>
        <div className={style.prjCardLinks}>
          <a className={style.prjCardLink} href={demo}>Demo</a>
          <a className={style.prjCardLink} href={source}>source</a>
        </div>
      </div>
    </>
  );
};

export default CardProject;
