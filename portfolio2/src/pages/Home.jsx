import React from "react";
import { getImageUrl } from "../imgPath";

const Home = () => {
  return (
    <>
      <section className="homeBg" id="home">
        <div className="home">
          <h2>
            Connect deeper. Build digital experiences that forge meaningful
            connections.
          </h2>
          <p>
            Solution-Oriented Frontend Developer || Building Products that Drive
            User Engagement and Business Growth
          </p>
        </div>
        <div className="homeImg">
          <div>
            <div className="homeIcon">
              <img src={getImageUrl("react.png")} alt="image"/>
            </div>
            <img src={getImageUrl("profile.jpg")} alt="image"/>
          </div>
          <div>
          <div className="homeIcon">
            <img src={getImageUrl("javascript.jpg")} alt="image"/>
          </div>
          <div className="homeIcon">
            <img src={getImageUrl("html.png")} alt="image"/>
          </div>
          <div className="homeIcon">
            <img src={getImageUrl("css.png")} alt="image"/>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
