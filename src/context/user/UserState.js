import React, { useState } from 'react'
import UserContext from './userContext'

function UserState(props) {
  const host = process.env.REACT_APP_HOST_LINK;
  const [user, setUser] = useState({})
  const authToken = localStorage.getItem("token");
  //Login 
  const login = async (email, password) =>{
    //api call
    const response = await fetch(`${host}/api/auth/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    });
    return(await response.json())
  }

  //Sign up
  const signup = async (email, password, name) =>{
    //api call
    const response = await fetch(`${host}/api/auth/signup`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, name})
    })
    return(await response.json())
  }

  //Delete an user
  const deleteUser = async () =>{
    //api call

  }

  //Update an user
  const updateUser = async () =>{
    //api call

  }
  //Change password of an user
  const changePass = async () =>{
    //api call

  }

  const getUser = async () =>{
    const response = await fetch(`${host}/api/auth/getuser`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "auth-token": authToken
        }
    });
    setUser(await response.json())
  }

  return (
    <UserContext.Provider
    value={{user, login, signup, deleteUser, updateUser, changePass, getUser }}
    >
      {/* this line is compersory for using context api */}
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState