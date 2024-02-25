import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CREATE_EMPLOY_PENDING } from "../redux-saga/admin/action/action";


const AddForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({});
  const [url, setUrl] = useState({});

  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value ,  });
  };
  console.log(inputData);

const handleSumbit = ()=>{
    dispatch({type: CREATE_EMPLOY_PENDING , payload : inputData})
}


  return (
    <>
      <div className="addemploy_box">
        <h1>Add Employess</h1>
        <div className="addemploy_input">
          <label>User Name</label>
          <input
            type="text"
            name="employName"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Name"
          />
        </div>

        <div className="addemploy_input">
          <label>Email</label>
          <input
            type="text"
            name="employEmail"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="addemploy_input">
          <label>Number</label>
          <input
            type="text"
            name="employNumber"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Number"
          />
        </div>
        <div className="addemploy_input">
          <label>Aadhar Number</label>
          <input
            type="text"
            name="employAadhar"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Aadhar"
          />
        </div>
        <div className="addemploy_input">
          <label>Address</label>
          <input
            type="text"
            name="employAddress"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Address"
          />
        </div>

        <div className=" addemploy_img">
          <label>Upload a file</label>
          <input type="file" id="logo" name="profile" />
        </div>

        <div className="addemploy_btn">
          <button onClick={() => navigate("/employ")}>Cancel</button>
          <button onClick={handleSumbit}>Add</button>
        </div>
      </div>
    </>
  );
};

export default AddForm;
