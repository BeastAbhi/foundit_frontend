import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/user/userContext';
import alertContext from '../context/alerts/alertContext';

function ChangePass() {
    const navigate = useNavigate();
    const context = useContext(alertContext);
    const { showAlert } = context;
    const userCon = useContext(userContext);
    const { changePass } = userCon;
    const [changePassword, setChangePass] = useState({
        oldpassword: "",
        newpassword: "",
        comfirmPass: ""
      });
      const setValues = (e) => {
        setChangePass({ ...changePassword, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        if(changePassword.newpassword !== changePassword.oldpassword){
            if(changePassword.newpassword ===  changePassword.comfirmPass ){
                changePass(changePassword.oldpassword, changePassword.newpassword)
                navigate('/')
                showAlert('Password changed successfully', 'success')
            }
            else{
                showAlert('Password dous not matach', 'danger')
            }
        }
        else{
            showAlert('New Password cannot be same as old Password', 'danger')
        }
      }
  return (
    <div>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePass