import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/alerts/alertContext";

function Signup() {
  const context = useContext(alertContext)
  const {showAlert} = context;
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
    comfirmPass:""
  });
  let navigate = useNavigate()
  const host = process.env.REACT_APP_HOST_LINK;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginDetails.comfirmPass === loginDetails.password) {
        const {email, password, name} = loginDetails
      const response = await fetch(`${host}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, name}),
      });
      const json = await response.json();
      if(json.success){
        localStorage.setItem('token', json.authtoken)
        navigate('/')
        showAlert('Account Created Successfully','success')
      }
      else{
        showAlert(json.error,'danger')
      }
    }
    else{
        showAlert("Passwords dous't  match",'danger')
    }
  };
  const setValues = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
