import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alerts/alertContext";
import userContext from "../context/user/userContext";
import "../style/submitButton.css";

function Signup() {
  const context = useContext(alertContext);
  const { showAlert } = context;
  const userCon = useContext(userContext);
  const { signup, verifyEmail } = userCon;
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
    comfirmPass: "",
    OTP: "",
  });
  const [active, setActive] = useState(true);
  const [code, setCode] = useState();
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginDetails.comfirmPass === loginDetails.password) {
      const { email, password, name } = loginDetails;
      if (parseInt(loginDetails.OTP) === code) {
        const json = await signup(email, password, name);
        if (json.success) {
          localStorage.setItem("token", json.authtoken);
          navigate("/");
          showAlert("Account Created Successfully", "success");
        } else {
          showAlert(json.error, "danger");
        }
      } else {
        showAlert("OTP is not valid", "danger");
      }
    } else {
      showAlert("Passwords dous't  match", "danger");
    }
  };
  const setValues = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const verify = async () => {
    setActive(!active);
    let tempCode = Math.floor(100000 + Math.random() * 900000);
    setCode(tempCode);
    setTimeout(() => {
      setActive(true);
    }, 60000);
    let responce = await verifyEmail(loginDetails.email, tempCode);
    showAlert(responce.message, responce.success);
  };
  return (
    <div style={{ maxWidth: "500px", marginTop:"100px" }}>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={setValues}
            required
            minLength={5}
          />
        </div>

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
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>

          <button
            type="button"
            className={`btn btn-outline-secondary my-3 ${!active ? "disabled" : ""}`}
            onClick={verify}
          >
            Send Mail📧
          </button><br/>
          <sup>You can send mail after 1 minute</sup>
        </div>
        <div className="mb-3">
          <label htmlFor="OTP" className="form-label">
            OTP
          </label>
          <input
            type="text"
            className="form-control"
            id="OTP"
            name="OTP"
            onChange={setValues}
            required
          />
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
            required
            minLength={8}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comfirmPass" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="comfirmPass"
            name="comfirmPass"
            onChange={setValues}
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
          Already have an account
          <Link
            to={"/login"}
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            {" "}
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
