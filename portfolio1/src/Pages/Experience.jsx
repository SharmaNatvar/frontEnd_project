import React from "react";
import skill from "../data/skills.json";
import style from "../App.module.css";
import { getImageUrl } from "../imgPath";

const Experience = () => {
  return (
    <>
      <section className={style.experContainer} id="experince">
        <h2 className={style.experTitle}>Experience</h2>
        <div className={style.experContent}>
          <div className={style.experSkills}>{
            skill.map((skill , id)=>{
                return <div key={id} className={style.experSkill}>
                    <div className={style.experSkillImg}><img src={getImageUrl(skill.imgSrc)} alt={skill.title}/></div>
                    <p>{skill.title }</p>
                </div>
            })
          }</div>
          <ul className={style.experCompany}>
            <li className={style.experCompanyItem}>
                <h3>Computer Hardware Trainee</h3>
                <h4>Smart Line Solutions</h4>
                <p>Jul. 2019 – Oct. 2019</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Experience;
