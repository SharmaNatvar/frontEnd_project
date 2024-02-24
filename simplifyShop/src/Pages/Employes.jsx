import React from "react";
import "./common.scss";
import Container from "../Component/Container";
import Card from "../Component/Card";

const Employes = () => {
  return (
    <>
      <div>
        <Container>
          <div className="employBg">
            <div className="employFilterSction">
            <button><h3>Add Employ</h3></button>
              <div className="employFilterTitle">
                <p>Filter</p>
                <p>Clear</p>
              </div>
              <div className="employFilterSalary">
                <p>Salary</p>
                <div>
                  <p>5000</p>
                  <p>15000</p>
                  <p>25000</p>
                </div>
                <input min={5000} max={25000} type="range" />
              </div>
              <div>
                <h2>Category</h2>
                <ul>
                  <li>
                    <input type="checkbox" value="worker" />
                    <label >Worker</label>
                  </li>
                  <li>
                    <input type="checkbox" value="superviser" />
                    <label >Superviser</label>
                  </li>
                  <li>
                    <input type="checkbox" value="peon" />
                    <label >Peon</label>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Active</h2>
                <ul>
                  <li>
                    <input type="radio" value="present" />
                    <label >Present</label>
                  </li>
                  <li>
                    <input type="radio" value="Absent" />
                    <label >Absent</label>
                  </li>
                </ul>
              </div>
            </div>
            {/* card section */}
            <div className="cardBG">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Employes;
