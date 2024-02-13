import React, { useState } from "react";
import {SkillCard, SkillCardInfo} from "../Component/SkillCard";
import SKILL from "../JSON/skillData.json";
import { getImageUrl } from "../imgPath";

const Skill = () => {

const [selectSkill , setSelectSkill] = useState(SKILL[0])

const handleSelectSkill = (data) =>{
    setSelectSkill(data)
}

  return (
    <>
      <section className="skill_bg" >
        <h5 id="skill">Technical Proficiency</h5>
        <div className="skill">
          <div className="skills">
            {SKILL.map((e) => (
              <SkillCard key={e.title} iconUrl={getImageUrl(e.icon)} title={e.title}  isActive={selectSkill.title === e.title} onClick={()=>{
                handleSelectSkill(e)
              }}/>
            ))}
          </div>
            <div className="skills_info">
<SkillCardInfo heading={ selectSkill.title }  skills={selectSkill.skills}/>
            </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
