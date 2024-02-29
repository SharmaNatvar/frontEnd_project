import React, {  useState } from "react";
import "./common.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signDB } from "../../config/firebaseConfig";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({});
  const [value, setValue] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(inputData, "sigup");
    console.log(inputData.email);
    console.log(inputData.password);
    if (inputData.email && inputData.password) {
      createUserWithEmailAndPassword(
        signDB,
        inputData.email,
        inputData.password
      )
        .then((res) => {
          console.log(res, "handleSumbit result");
        })
        .catch((err) => {
          console.log(err);
        });
      setInputData((inputData.email = ""), (inputData.password = ""));
      setValue(false);
    } else {
      swal("Enter email password", {
        buttons: true,
      });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(inputData, "sigin");
    console.log(inputData.email);
    console.log(inputData.password);
    if (inputData.email && inputData.password) {
      signInWithEmailAndPassword(signDB, inputData.email, inputData.password)
        .then((res) => {
          console.log(res);
          localStorage.setItem("loginEmail", JSON.stringify(res._tokenResponse.localId));
          swal({
            text: "Log In scusses", 
            icon: "success",
            button: "Done",
          });
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          swal("Enter proper detail", {
            buttons: true,
          });
        });
    } else {
      swal("Enter email password", {
        buttons: true,
      });
    }
  };
  return (
    <>
      <form>
        <div className="formBox">
          <div>{value ? <h1>Sign Up</h1> : <h1>Sign In</h1>}</div>
          <div className="inputBox">
            <label className="formLabel">Email address</label>
            <br />
            <input
              type="email"
              className="formInput formEmail"
              name="email"
              value={inputData.email || " "}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </div>
          <div className="inputBox">
            <label className="formLabel">Password</label>
            <br />
            <input
              type="password"
              className="formInput formNumber"
              name="password"
              value={inputData.password || ""}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </div>

          <div className="account">
            {value ? (
              <p>
                Already Account{" "}
                <span onClick={() => setValue(false)}>Sign In</span>
              </p>
            ) : (
              <p>
                Create Account{" "}
                <span onClick={() => setValue(true)}>Sign up</span>
              </p>
            )}
          </div>
          {value ? (
            <button type="submit" className="fromBtn" onClick={handleSignUp}>
              Sign Up
            </button>
          ) : (
            <button type="submit" className="fromBtn" onClick={handleSignIn}>
              Sign In
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Signin;
