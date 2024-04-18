import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../context/user/userContext";
import alertContext from "../context/alerts/alertContext";
import "../style/submitButton.css";

function ChangePass() {
  const navigate = useNavigate();
  const context = useContext(alertContext);
  const { showAlert } = context;
  const userCon = useContext(userContext);
  const { changePass } = userCon;
  const [changePassword, setChangePass] = useState({
    oldpassword: "",
    newpassword: "",
    comfirmPass: "",
  });
  const setValues = (e) => {
    setChangePass({ ...changePassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (changePassword.newpassword !== changePassword.oldpassword) {
      if (changePassword.newpassword === changePassword.comfirmPass) {
        if (window.confirm("Do you want to change your password")) {
          changePass(changePassword.oldpassword, changePassword.newpassword);
          navigate("/");
          showAlert("Password changed successfully", "success");
        }
      } else {
        showAlert("Password dous not matach", "danger");
      }
    } else {
      showAlert("New Password cannot be same as old Password", "danger");
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Old Password
          </label>
          <input
            type="password"
            className="form-control"
            id="oldpassword"
            name="oldpassword"
            onChange={setValues}
            required
            minLength={8}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newpassword"
            name="newpassword"
            onChange={setValues}
            required
            minLength={8}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comfirmPass" className="form-label">
            Confirm New Password
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

export default ChangePass;
