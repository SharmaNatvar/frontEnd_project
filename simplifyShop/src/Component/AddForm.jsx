import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  CREATE_EMPLOY_PENDING,
  READ_EMPLOY_PENDING,
  UPDATE_EMPLOY_PENDING,
} from "../redux-saga/admin/action/action";
import { imgDB } from "../config/firebaseConfig";
import { v4 } from "uuid";
import swal from "sweetalert";

const AddForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({});
  const [url, setUrl] = useState({});
  const { id } = useParams();
  const [dataValue, setDataValue] = useState();

  useEffect(() => {
    dispatch({ type: READ_EMPLOY_PENDING });
  }, []);

  const { data } = useSelector((state) => state.adminReducer.data);

  useEffect(() => {
    if (id !== "id") {
      const result = data?.filter((e) => {
        return e.id === id;
      });
      if (result) {
        setInputData(result[0]);
      }
    }
  }, [data]);

  const handleFile = (e) => {
    uploadBytes(ref(imgDB, `img/${v4()}`), e.target.files[0]).then((res) => {
      getDownloadURL(res.ref).then((res) => setUrl({ ...url, urlId: res }));
    });
  };

  console.log(url, "url 0");
  const handleOnChange = (e) => {
    setInputData({
      ...inputData,
      url: url.urlId,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = () => {
    dispatch({
      type: CREATE_EMPLOY_PENDING,
      payload: inputData,
    });
    swal({
      title: "Good job!",
      text: "Employee added successfully!",
      icon: "success",
    });
    navigate("/employ");
  };
  console.log(inputData, "inputData 0");

  const handleUpdateSumbit = () => {
    dispatch({
      type: UPDATE_EMPLOY_PENDING,
      payload: { ...inputData, id },
    });
    swal({
      title: "Success!",
      text: "Employee updated successfully!",
      icon: "success",
    });
    navigate("/employ");
  };

  return (
    <>
      <div className="addemploy_box">
        <h1>{id === "id" ? "Add" : "Update"} Employess</h1>
        <div className=" addemploy_img">
          <label>Upload a file</label>
          <input
            type="file"
            id="logo"
            name="profile"
            // value={inputData.url || ""}
            onChange={(e) => handleFile(e)}
          />
        </div>
        <div className="addemploy_input">
          <label>User Name</label>
          <input
            type="text"
            name="employName"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Name"
            value={inputData.employName || ""}
          />
        </div>

        <div className="addemploy_input">
          <label>Email</label>
          <input
            type="text"
            name="employEmail"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Email Address"
            value={inputData.employEmail || ""}
          />
        </div>
        <div className="addemploy_input">
          <label>Number</label>
          <input
            type="text"
            name="employNumber"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Number"
            value={inputData.employNumber || ""}
          />
        </div>
        <div className="addemploy_input">
          <label>Salary</label>
          <input
            type="text"
            name="employSalary"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Salary"
            value={inputData.employSalary || ""}
          />
        </div>
        <div className="addemploy_select">
          <label htmlFor={'profession'}>Profession</label>
          <select id="profession" name="employProfession" onChange={(e)=>handleOnChange(e)}>
            <option value="Default">None</option>
            <option value="employer">employer</option>
            <option value="supervisor">supervisor</option>
            <option value="manager">manager</option>
            <option value="peon ">peon </option>
          </select>
        </div>
        <div className="addemploy_input">
          <label>Aadhar Number</label>
          <input
            type="text"
            name="employAadhar"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Aadhar"
            value={inputData.employAadhar || ""}
          />
        </div>
        <div className="addemploy_input">
          <label>Address</label>
          <input
            type="text"
            name="employAddress"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter Address"
            value={inputData.employAddress || ""}
          />
        </div>

        <div className="addemploy_btn">
          <button onClick={() => navigate("/employ")}>Cancel</button>
          {id === "id" ? (
            <button onClick={handleSumbit}>Add</button>
          ) : (
            <button onClick={handleUpdateSumbit}>Update</button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddForm;
