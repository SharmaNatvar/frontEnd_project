import React, { useRef, useState } from "react";
import "./common.scss";

const Signin = () => {
    // const email = useRef()
    const [inputData , setInputData] = useState({})

    const HandleOnChange = (e) =>{
        e.preventDefault()
        setInputData({...inputData , [e.target.name]:e.target.value})
    }
    
    const handleSumbit = (e) =>{
        e.preventDefault()
        console.log(inputData);

    }
  return (
    <>
      <form>
        <div className="formBox">
        <div className="inputBox">
          <label className="formLabel">
            UserName
          </label><br/>
          <input
            type="text"
            className="formInput formText"
            name="userName"
            onChange={(e)=> HandleOnChange(e)}
          />
        </div>
        <div className="inputBox">
          <label className="formLabel">
            Email address
          </label><br/>
          <input
            type="email"
            className="formInput formEmail"
            name="email"
            onChange={(e)=> HandleOnChange(e)}
          />
        </div>
        <div className="inputBox">
          <label className="formLabel">
            Number
          </label><br/>
          <input
            type="number"
            className="formInput formNumber"
            name="phone"
            onChange={(e)=> HandleOnChange(e)}
          />
        </div>
        <div className="inputBox">
          <label className="formLabel">
          Password
          </label><br/>
          <input
            type="password"
            className="formInput formNumber"
            name="password"
            onChange={(e)=> HandleOnChange(e)}
          />
        </div>

        <button type="submit" className="fromBtn" onClick={handleSumbit}>
          Submit
        </button>
        </div>
      </form>
    </>
  );
};

export default Signin;
