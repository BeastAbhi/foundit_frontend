import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/user/userContext";
import { useNavigate } from "react-router-dom";


function UserDetails() {
  const navigate = useNavigate();
  const userCon = useContext(userContext);
  const { getUser, user, deleteUser } = userCon;
  const [visible, setVisible] = useState(true)

  const toggle = () =>{
      setVisible(!visible)
  }
  useEffect( () => {
     getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteAcc = () =>{
      console.log(deleteUser())
      toggle()
      localStorage.removeItem('token')
      navigate('/signup')
  }
  const edit = () =>{
    navigate('/edituser')
    toggle()
  }
  const changePass = () =>{
    navigate('/changepassword')
    toggle()
  }
  
  return (
    <div className="d-flex" style={{position:"relative"}}>
      <button className="btn btn-primary mx-3" onClick={toggle}>
        User
      </button>
      <div style={{display:visible ? "none" : "inline-block", position:"absolute", backgroundColor:"white",top:"5px",left:"-250px", zIndex:"10"}}> 
      <p>Your name: {user.name}</p>
      <p>Your email: {user.email}</p>
      <p>Your Id: {user._id}</p>
      <p onClick={toggle}>X</p>
      <button className="btn btn-primary mx-3" onClick={deleteAcc}>
        Delete Account
      </button>
      <button className="btn btn-primary mx-3" onClick={edit}>
        Edit Account
      </button>
      <button className="btn btn-primary mx-3" onClick={changePass}>
        Change Password
      </button>
      </div>
    </div>
  );
}

export default UserDetails;
