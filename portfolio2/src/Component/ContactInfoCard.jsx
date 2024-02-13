import React from "react";

const ContactInfoCard = ({ iconUrl, txt }) => {
  return (
    <>
      <div className="contactDetailCard">
        <div className="icon">
          <img src={iconUrl} />
        </div>
          <p>{txt}</p>
      </div>
    </>
  );
};

export default ContactInfoCard;
