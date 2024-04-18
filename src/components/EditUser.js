import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../context/user/userContext";
import alertContext from "../context/alerts/alertContext";
import "../style/submitButton.css";
function EditUser() {
  const navigate = useNavigate();
  const context = useContext(alertContext);
  const { showAlert } = context;
  const userCon = useContext(userContext);
  const { user, updateUser } = userCon;

  const [changedDetails, setChangedDetails] = useState({
    name: user.name,
    email: user.email,
  });

  const setValues = (e) => {
    setChangedDetails({ ...changedDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (window.confirm("Do you want to update your Account Detail")) {
      updateUser(changedDetails.name);
      showAlert("User Edited succesfully", "success");
      navigate("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setChangedDetails({
        name: user.name,
        email: user.email,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
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
            value={changedDetails.name}
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
            required
            disabled
            value={changedDetails.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div>
          <div>
            <button class="submitBtn">
              Submit
              <svg
                fill="white"
                viewBox="0 0 448 512"
                height="1em"
                class="arrow"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
