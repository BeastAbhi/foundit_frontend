import React, { useContext } from "react";
import alertContext from "../context/alerts/alertContext";

function Alert() {
  const context = useContext(alertContext)
  const {message, type} = context
  return (
    <div>
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        <strong>{message}</strong>
      </div>
    </div>
  );
}

export default Alert;
