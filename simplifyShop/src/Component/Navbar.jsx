import React from "react";
import Container from "./Container";
import "./common.scss";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () =>{
        localStorage.removeItem('loginEmail')
        navigate("/")
  }

  return (
    <nav className="NavbarBg">
      <Container>
        <div className="Navbar">
          <div className="Navbar_Title">
            <h1>
              <span>S</span>hop
            </h1>
          </div>
          <ul className="Navbar_Items">
            <li className="Navbar_Item">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="Navbar_Item">
              <Link to={"/employ"}>Employe</Link>
            </li>
            <li className="Navbar_Item">
              <Link to={"/product"}>Product</Link>
            </li>
          </ul>
          <div className="Navbar_btn">
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
