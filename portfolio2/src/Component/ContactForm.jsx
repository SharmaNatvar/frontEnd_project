import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contactFromBg">
        <from>
          {/* <div className='name_Container'> */}
          <input type="text" name="fullName" placeholder="Enter Full Name" />
          {/* </div> */}
          <input type="email" name="email" placeholder="Enter Email" />
          <textarea
            type="text"
            name="message"
            placeholder="Enter Message"
            rows={3}
          />
          <button>SEND</button>
        </from>
      </div>
    </>
  );
};

export default ContactForm;
