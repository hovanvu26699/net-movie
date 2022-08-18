import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import "../styles/_signUp.scss"

const SignUp = () => {
  return <div className="signUp-container">
    {/* <div>
      <Header />
    </div> */}
    <div className="signUp-form">
      <div className="form-content">
        <form>
          <h2>Sign In</h2>
          <div className="userName">
            <input className="inputUser txtFirstName" placeholder="First Name" />
            <input className="inputUser txtLastName" placeholder="Last Name" />
          </div>
          <div className="userEmail">
            <input className="inputUser txtEmail" placeholder="Email" />
          </div>
          <div className="userPhone">
            <input className="inputUser txtPhone" placeholder="Phone Number" />
          </div>
          <div className="userPass">
            <input className="inputUser txtPass" type="password" placeholder="Password" />
          </div>
          <div className="userPass">
            <input className="inputUser txtConfirmPass" type="password" placeholder="Confirm Password" />
          </div>
          <div className="textLogin">
            <p>Already a member? <Link to="/signIn">Sign In</Link></p>
          </div>
          <div className="userBtn">
            <button className="inputUser btnSubmit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
    {/* <div>
      <Footer />
    </div> */}
  </div>;
};

export default SignUp;
