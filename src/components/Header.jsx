import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";



const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-search">
        <div className="logo">
          <Link to="/"> <img src={logo} alt="" /></Link>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search . . ."></input>
        </div>
      </div>
      <div className="header-btn">
        <Link to="/signIn"><button>Sign In</button></Link>
        <Link to="/signUp"> <button>Sign Up</button></Link>
      </div>
    </div>
  );
};

export default Header;