import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


const SignIn = () => {
  return (
    <div className="signIn-container">
      <div>
        <Header />
      </div>
      <div className="signIn-form">
        <div className="form-content">
          <form>
            <h2>Sign In</h2>
            <div className="userEmail">
              <input className="inputuser txtName" type="email" placeholder="Email or phone number" />
            </div>
            <div className="userPass">
              <input className="inputuser txtPass" type="password" placeholder="Password" />
            </div>
            <div className="userBtn">
              <button className="inputuser btnSubmit">Sign In</button>
            </div>
            <div className="help-info">
              <div>
                <input type="checkbox" id="remember" value="remember" />
                <label for="remember"> Remember me</label>
              </div>
              <span className="help">Need help?</span>
            </div>
            <div className="moreInfo">
              <span>New to Netflix? <a>Sign up now</a>.</span>
              <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a> </p>
            </div>
          </form>
        </div>

      </div>
      <div>
        <Footer />

      </div>
    </div>
  );
};

export default SignIn;
