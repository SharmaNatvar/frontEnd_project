import React from "react";
import profile from "../assets/profile.jpg"

const Card = () => {
  return (
    <>
      <div className="emplyCard">
        <img src={profile} className="emplyCardImg" alt="Profile" />
        <div className="emplyCardBody">
          <h3 className="emplyCardName">json</h3>
          <p className="emplyCardEmail">redux@gmail</p>
          <p className="emplyCardNumber">9978543917</p>
          <p className="emplyCardAddar">1234567890987654321</p>
          <p className="emplyCardAddres">204,rajplace surat near gujract</p>
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
