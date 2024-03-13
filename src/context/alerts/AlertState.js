import React, { useState } from 'react'
import AlertContext from './alertContext'
import { type } from '@testing-library/user-event/dist/type'
function AlertState(props) {
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null)
    const showAlert = (messa, typ) =>{
        setMessage(messa)
        setType(typ)
      setTimeout(() =>{
        setMessage(null)
        setType(null)
      }, 1500);
    }
  return (
    <AlertContext.Provider value={{showAlert, message, type}}>
      {/* this line is compersory for using context api */}
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState