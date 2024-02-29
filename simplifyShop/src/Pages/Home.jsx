import React from "react";
import Container from "../Component/Container";
import Navbar from "../Component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeBg">
        <Container>
          <div className="home">
            <h1>Empower your team, elevate your brand.</h1>
            <p>
              Your one-stop shop for building a thriving brand with the right
              people and products.
            </p>
            <div class="svghomeRight">
              <svg
                width="535"
                height="535"
                viewBox="0 0 535 535"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M534.938 261.685H273.315C270.104 261.685 267.5 264.288 267.5 267.5C267.5 270.712 270.104 273.315 273.315 273.315H534.938C531.844 418.366 413.293 535 267.5 535C119.764 535 0 415.236 0 267.5C0 119.764 119.764 0 267.5 0C413.293 0 531.844 116.634 534.938 261.685Z"
                  fill="#5e71ff"
                />
              </svg>
              </div>
              <div className="svghomeleft">
              <svg
                width="617"
                height="535"
                viewBox="0 0 617 535"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M308.5 535L617 0H0L308.5 535Z" fill="#5e71ff" />
              </svg>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
