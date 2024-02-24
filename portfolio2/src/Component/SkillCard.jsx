import React from "react";

export const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <>
      <div
        className={`skillCard ${isActive ? "active" : " "}`}
        onClick={() => onClick()}
      >
        <div className="skillCardIcon">
          <img src={iconUrl} alt={title} />
        </div>
        <span>{title}</span>
      </div>
    </>
  );
};

export const SkillCardInfo = ({ heading, skills }) => {
  return (
    <div className="skillCardInfo_Bg">
      <h6>{heading}</h6>
      <div className="skillCardInfo">
        {skills.map((e, index) => {
          return (
            <div key={`skill_${index}`}>
              <div className="skillInfo">
                <p>{e.skill}</p>
                <p className="skillProgress"></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
