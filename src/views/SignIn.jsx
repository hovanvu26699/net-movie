import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const SignIn = () => {
    const [values, setValue] = useState({
        user: "",
        password: "",
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
    };
    return (<>
        <div className="signIn-container">
            <div className="signIn-form">
                <div className="form-content">
                    <form>
                        <h2>Sign In</h2>
                        <div className="userEmail">
                            <input
                                className="inputuser txtName"
                                type="email"
                                name="user"
                                value={values.user}
                                placeholder="Email or phone number"
                                onChange={handleChange}
                            />
                            {error.user && <p className="error">{error.user}</p>}
                        </div>
                        <div className="userPass">
                            <input
                                className="inputuser txtPass"
                                type="password"
                                name="password"
                                value={values.password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            {error.password && <p className="error">{error.password}</p>}
                        </div>
                        <div className="userBtn">
                            <button
                                className="inputuser btnSubmit"
                                onClick={handleFormSubmit}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="help-info">
                            <div>
                                <input type="checkbox" id="remember" value="remember" />
                                <label for="remember"> Remember me</label>
                            </div>
                            <span className="help">Need help?</span>
                        </div>
                        <div className="moreInfo">
                            <span>
                                New to Netflix? <Link to="/signUp">Sign up now</Link>.
                            </span>
                            <p>
                                This page is protected by Google reCAPTCHA to ensure you're not
                                a bot. <a>Learn more.</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
    );
};

const validation = (value) => {
    let error = {};
    console.log(value.user)
    const getuser = localStorage.getItem(`user${value.user}`);
    if (!value.user) {
        error.user = "Name is required.";
    }
    if (!value.password) {
        error.password = "Password is required"
    }
    if (Object.keys(error).length === 0) {
        if (getuser && getuser.length) {
            const userLogin = JSON.parse(getuser)
            localStorage.setItem("userLogin", userLogin)
            alert("Success!")
        }
        else {
            alert("Email or password incorrect")
        }
    }
    return error;
};

export default SignIn;
