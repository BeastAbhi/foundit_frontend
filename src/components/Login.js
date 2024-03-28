import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alerts/alertContext";
import userContext from "../context/user/userContext";

function Login() {
  const context = useContext(alertContext);
  const { showAlert } = context;
  const userCon = useContext(userContext)
  const { login } = userCon;
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  // useNavigate hook is use to redirect the user to another location
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = await login(loginDetails.email, loginDetails.password)

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
    <div className="mt-3">
    <h1>Login to countinue to foundit</h1>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <Link to={"/signup"}>don't have an account click here</Link>
      </form>
    </div>
  );
}

export default Login;
