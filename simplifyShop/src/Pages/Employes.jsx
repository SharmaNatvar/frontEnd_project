import React, { useEffect, useState } from "react";
import "./common.scss";
import Container from "../Component/Container";
import Card from "../Component/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { READ_EMPLOY_PENDING } from "../redux-saga/admin/action/action";

const Employes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [card, setCard] = useState([]);
  const { data } = useSelector((state) => state.adminReducer.data);

  useEffect(() => {
    dispatch({ type: READ_EMPLOY_PENDING });
  }, []);

  useEffect(() => {
    setCard(data);
  }, [data]);

  console.log(card, "card");

  return (
    <>
      <div>
        <Container>
          <div className="employBg">
            <div className="employFilterSction">
              <button onClick={() => navigate("/addfrom")}>
                <h3>Add Employ</h3>
              </button>
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
                    <label>Worker</label>
                  </li>
                  <li>
                    <input type="checkbox" value="superviser" />
                    <label>Superviser</label>
                  </li>
                  <li>
                    <input type="checkbox" value="peon" />
                    <label>Peon</label>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Active</h2>
                <ul>
                  <li>
                    <input type="radio" value="present" />
                    <label>Present</label>
                  </li>
                  <li>
                    <input type="radio" value="Absent" />
                    <label>Absent</label>
                  </li>
                </ul>
              </div>
            </div>
            {/* card section */}
            <div className="cardBG">
              {card?.map((e) => {
                return (
                  <Card
                    employAadhar={e.employAadhar}
                    employAddress={e.employAddress}
                    employEmail={e.employEmail}
                    employName={e.employName}
                    employNumber={e.employNumber}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Employes;
