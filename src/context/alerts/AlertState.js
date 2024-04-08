import React, { useState } from 'react'
import AlertContext from './alertContext'
function AlertState(props) {
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null)
    const showAlert = (messa, typ, deu = 1500) =>{
        setMessage(messa)
        setType(typ)
      setTimeout(() =>{
        setMessage(null)
        setType(null)
      }, deu);
    }
  return (
    <AlertContext.Provider value={{showAlert, message, type}}>
      {/* this line is compersory for using context api */}
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState