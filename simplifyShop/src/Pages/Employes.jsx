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
  const [categories, setCategories] = useState([]);
  const [card, setCard] = useState([]);
  const { data } = useSelector((state) => state.adminReducer.data);
  console.log(data, "call data");
  useEffect(() => {
    dispatch({ type: READ_EMPLOY_PENDING });
  }, []);

  useEffect(() => {
    setCard(data);
  }, [data]); // card here

  const handleRange = (val) => {
    console.log(val.target.value, "value");
    const result = data?.filter((e) => {
      return parseInt(e.employSalary) > parseInt(val.target.value);
    });
    setCard(result);
  };
  
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    console.warn(value, checked);
    const updatedCategories = checked
    ? [...categories, value]
    : categories.filter((category) => category !== value);
    
    setCategories(updatedCategories);
  };
  
  
  useEffect(() => {
    const result = data?.filter((e) => {
      return categories.includes(e.employProfession);
    });
    console.warn(result);
    setCard(result);
  }, [categories]);
  console.log(card , 'card');
  
  const handleOnChangeSearch = (val) => {
    console.log(val.target.value, "value");
    const result = data?.filter((e) => {
      return e.employName.trim() === val.target.value;
    });
    setCard(result);
  };
  
  return (
    <>
      <div>
        <Container>
          <div className="employBg">
            <div className="employFilterSction">
              <button onClick={() => navigate("/addfrom/id")}>
                <h3>Add Employ</h3>
              </button>
              <div className="employFilterTitle">
                <p>Filter</p>
                <p onClick={() => window.location.reload(false)}>Clear</p>
              </div>

              <div className="searchemploy_input">
                <label>Search</label>
                <input
                  type="text"
                  name="inputSearch"
                  onChange={(e) => handleOnChangeSearch(e)}
                  placeholder="Search Name"
                  // value={inputData.employAddress || ""}
                />
              </div>
              <div className="employFilterSalary">
                <p>Salary</p>
                <div>
                  <p>5000</p>
                  <p>15000</p>
                  <p>25000</p>
                </div>
                <input
                  min={5000}
                  max={25000}
                  type="range"
                  onChange={(e) => handleRange(e)}
                />
              </div>
              <div className="employFilterCategory">
                <h2>Category</h2>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      value="employer"
                      checked={categories.includes("employer")}
                      onClickCapture={handleCheckbox}
                    />
                    <label>Employer</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="supervisor"
                      checked={categories.includes("supervisor")}
                      onChange={handleCheckbox}
                    />
                    <label>Supervisor</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="manager"
                      checked={categories.includes("manager")}
                      onChange={handleCheckbox}
                    />
                    <label>Manager</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="peon"
                      checked={categories.includes("peon")}
                      onChange={handleCheckbox}
                    />
                    <label>Peon</label>
                  </li>
                </ul>
              </div>
            </div>
            {/* card section */}
            <div className="cardBG">
            
              {
                card?.map((e, index) => {
                return (
                  <div key={index}>
                    <Card
                      employAadhar={e.employAadhar}
                      employAddress={e.employAddress}
                      employEmail={e.employEmail}
                      employName={e.employName}
                      employNumber={e.employNumber}
                      url={e.url}
                      id={e.id}
                      salary={e.employSalary}
                      employProfession={e.employProfession}
                    />
                  </div>
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
