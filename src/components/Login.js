import React, { useState } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";

function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  // useNavigate hook is use to redirect the user to another location
  let navigate = useNavigate()
  const host = process.env.REACT_APP_HOST_LINK;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });
    const json = await response.json();
    if(json.success){
        //save the authtoken and Redirect
        localStorage.setItem('token', json.authtoken)
        navigate('/')
    }
    else{
        alert(json.error)
    }
  };
  const setValues = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;