import React from "react";
import ContactInfoCard from "../Component/ContactInfoCard";
import ContactForm from "../Component/ContactForm";
import { getImageUrl } from "../imgPath";

const Contact = () => {
  return (
    <>
      <section className="contactBg" id="contact">
        <h5>Contact Me</h5>
        <div className="contact">
          <div style={{ flex: 1 }}>
              <ContactInfoCard
                iconUrl={getImageUrl("emailIcon.png")}
                txt="Krish997854@gmail.com"
              />
            <a href="https://www.linkedin.com/in/sharmanatvar/" target="_blank">
              <ContactInfoCard
                iconUrl={getImageUrl("linkedinIcon.png")}
                txt="Sharma-Natvar"
              />
            </a>
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
