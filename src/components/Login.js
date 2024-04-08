import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alerts/alertContext";
import userContext from "../context/user/userContext";
import "../style/submitButton.css";

function Login() {
  const context = useContext(alertContext);
  const { showAlert } = context;
  const userCon = useContext(userContext);
  const { login } = userCon;
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  // useNavigate hook is use to redirect the user to another location
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = await login(loginDetails.email, loginDetails.password);

    if (json.success) {
      //save the authtoken and Redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      showAlert("Loggedin Succesfully", "success");
    } else {
      showAlert(json.error, "danger");
    }
  };
  const setValues = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ maxWidth: "500px", marginTop:"100px" }}>
      <h1>Login to Continue</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={setValues}
            value={loginDetails.email}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={setValues}
            value={loginDetails.password}
            required
            minLength={8}
          />
        </div>
        <div>
          <button className="submitBtn">
            Submit
            <svg fill="white" viewBox="0 0 448 512" height="1em" className="arrow">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </button>
        </div>
        <p>
          Don't have an account 
          <Link
            to={"/signup"}
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
