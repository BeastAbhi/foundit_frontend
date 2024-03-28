import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/user/userContext";

function UserDetails() {
  const userCon = useContext(userContext);
  const { getUser, user } = userCon;
 const [visible, setVisible] = useState(false)
  const toggle = () =>{
      setVisible(!visible)
  }
  useEffect( () => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="d-flex" style={{position:"relative"}}>
      <button className="btn btn-primary mx-3" onClick={toggle}>
        User
      </button>
      <div style={{display:visible ? "none" : "inline-block", position:"absolute", backgroundColor:"white",top:"5px",left:"-250px"}}> 
      <p>Your name: {user.name}</p>
      <p>Your email: {user.email}</p>
      <p>Your Id: {user._id}</p>
      <p onClick={toggle}>X</p>

      </div>
    </div>
  );
}

export default UserDetails;
