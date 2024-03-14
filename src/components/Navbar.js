import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserDetails from "./UserDetails";
//We use useLocation hook for high lighiting the routen as user click it.
function Navbar() {
  let location = useLocation();
  const navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FoundIt
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about"? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userposts">
                  Your Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true" to="/">
                  Disabled
                </Link>
              </li>
            </ul>
            <div>
            {!localStorage.getItem('token') ?
              <form className="d-flex">
                <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
              </form>
              : <button className="btn btn-primary" onClick={handleLogout}>Logout</button>}
            </div>
            <div>
              <UserDetails/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
