import React, { useContext } from "react";
import alertContext from "../context/alerts/alertContext";

function Alert() {
  const context = useContext(alertContext)
  const {message, type} = context
  return (
    <div className="fixed-top" style={{marginTop:"75px"}}>
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        <strong>{message}</strong>
      </div>
    </div>
  );
}

export default Alert;
