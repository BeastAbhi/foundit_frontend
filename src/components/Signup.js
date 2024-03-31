import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alerts/alertContext";
import userContext from "../context/user/userContext";

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
    OTP: ""
  });
  const [active, setActive] = useState(true)
  const [code, setCode] = useState()
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginDetails.comfirmPass === loginDetails.password) {
      const { email, password, name } = loginDetails;
      if(parseInt(loginDetails.OTP) === code){
        const json = await signup(email, password, name);
        if (json.success) {
          localStorage.setItem("token", json.authtoken);
          navigate("/");
          showAlert("Account Created Successfully", "success");
        } else {
          showAlert(json.error, "danger");
        }
      }
      else{
      showAlert("OTP is not valid", "danger");
      }
    } else {
      showAlert("Passwords dous't  match", "danger");
    }
  };
  const setValues = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const verify = async () =>{
    setActive(!active)
    let tempCode = Math.floor(100000 + Math.random() * 900000)
    setCode(tempCode)
    setTimeout(() => {
      setActive(true)
    }, 60000);
    let responce = await verifyEmail(loginDetails.email,tempCode);
    showAlert(responce.message, responce.success);
  }
  return (
    <div className="mt-3">
    <h1>Create an account to use foundit</h1>
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
          <button type="button" className={`btn btn-primary ${!active ? "disabled": ""}`} onClick={verify}>
              Send Mail
          </button>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <Link to={"/login"}>already have an account click here</Link>
      </form>
    </div>
  );
}

export default Signup;
