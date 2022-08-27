import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
// import "../styles/_signUp.scss"

const SignUp = () => {
  const [values, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
    confpass: "",
    phone: "",
  });

  const [error, setError] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValue({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setError(validation(values));
    setDataIsCorrect(true);
  };

  return (
    <>
      {Object.keys(error).length === 0 && dataIsCorrect ? (
        <Navigate to="/signin" replace={true} />
      ) : (
        <div className="signUp-container">
          <div className="signUp-form">
            <div className="form-content">
              <form>
                <h2>Sign Up</h2>
                <div className="userName">
                  <input
                    className="inputUser txtFullName"
                    type="text"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                  {error.fullname && <p className="error">{error.fullname}</p>}
                </div>
                <div className="userEmail">
                  <input
                    className="inputUser txtEmail"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {error.email && <p className="error">{error.email}</p>}
                </div>
                <div className="userPhone">
                  <input
                    className="inputUser txtPhone"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  {error.phone && <p className="error">{error.phone}</p>}
                </div>
                <div className="userPass">
                  <input
                    className="inputUser txtPass"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {error.password && <p className="error">{error.password}</p>}
                </div>
                <div className="userPass">
                  <input
                    className="inputUser txtConfirmPass"
                    type="password"
                    name="confpass"
                    value={values.confpass}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  {error.confpass && <p className="error">{error.confpass}</p>}
                </div>
                <div className="textLogin">
                  <p>
                    Already a member? <Link to="/signIn">Sign In</Link>
                  </p>
                </div>
                <div className="userBtn">
                  <button
                    className="inputUser btnSubmit"
                    onClick={handleFormSubmit}
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const validation = (value) => {
  let error = {};
  console.log(value)
  if (!value.fullname) {
    error.fullname = "Name is required.";
  }
  if (!value.email) {
    error.email = "Email is required.";
  } else if (!/\S+@\S+/.test(value.email)) {
    error.email = "Email is invalid.";
  }
  if (!value.password) {
    error.password = "Password is invalid.";
  } else if (value.password.length < 5) {
    error.password = "Password must be more than five characters.";
  }
  if (!value.confpass) {
    error.confpass = "Confirm password is invalid.";
  } else if (value.password !== value.confpass) {
    error.confpass = "Confirm password incorrect.";
  }
  if (!value.phone) {
    error.phone = "Phone is required";
  } else if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      value.phone
    )
  ) {
    error.phone = "Phone is invalid";
  }
  if (Object.keys(error).length === 0) {
    localStorage.setItem(`user${value.email}`, JSON.stringify(value))
  }
  return error;
};

export default SignUp;
