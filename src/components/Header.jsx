import React from "react";
import logo from "../assets/logo.jpg";



const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-search">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search . . ."></input>
        </div>
      </div>
      <div className="header-btn">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;