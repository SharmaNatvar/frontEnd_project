import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg"
import { DELETE_EMPLOY_PENDING } from "../redux-saga/admin/action/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { deleteDoc, doc } from "firebase/firestore";
// import { txtDB } from "../config/firebaseConfig";

const Card = ({employAadhar ,
    employAddress ,
    employEmail ,
    employName ,
    employNumber,
    salary,
    url,
    employProfession,
id}) => {
const dispatch = useDispatch()
const navigate = useNavigate()

        // delete data
// const handleDelete = async(id) =>{
//     console.log(id , 'id');
//     await deleteDoc(doc(txtDB , 'todoList' ,id))
//     .then((res) => console.log(res))

// }

const handleDeleteClick = (id) => {
    console.log(id , 'id0');
    dispatch({ type: DELETE_EMPLOY_PENDING, payload: id });
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "ok",
    });
    navigate('/home')
  };



  return (
    <>
      <div className="emplyCard">
        <img src={url} className="emplyCardImg" alt="Profile" />
        <div className="emplyCardBody">
          <h3 className="emplyCardName">{employName}</h3>
          <p className="emplyCardEmail">Email : {employEmail}</p>
          <p className="emplyCardNumber">Phone : {employNumber}</p>
          <p className="emplyCardSalary">Salary : {salary}</p>
          <p className="emplyCardProfession">Profession : {employProfession}</p>
          <p className="emplyCardAddar">Aadhar No. : {employAadhar}</p>
          <p className="emplyCardAddres">Address : {employAddress}</p>
          <div className="emplyBtns">
            <button onClick={()=>navigate(`/addfrom/${id}`)}>update</button>
            <button onClick={()=>handleDeleteClick(id)} >delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
