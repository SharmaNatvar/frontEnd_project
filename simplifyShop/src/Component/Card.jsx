import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg"
import { useSelector } from "react-redux";

const Card = ({employAadhar ,
    employAddress ,
    employEmail ,
    employName ,
    employNumber}) => {

  return (
    <>
      <div className="emplyCard">
        <img src={profile} className="emplyCardImg" alt="Profile" />
        <div className="emplyCardBody">
          <h3 className="emplyCardName">{employName}</h3>
          <p className="emplyCardEmail">{employEmail}</p>
          <p className="emplyCardNumber">{employNumber}</p>
          <p className="emplyCardAddar">{employAadhar}</p>
          <p className="emplyCardAddres">{employAddress}</p>
          <div className="emplyBtns">
            <button>update</button>
            <button>delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
