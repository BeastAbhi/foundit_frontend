import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/user/userContext';
import alertContext from '../context/alerts/alertContext';

function EditUser() {
    const navigate = useNavigate();
    const context = useContext(alertContext);
    const { showAlert } = context;
    const userCon = useContext(userContext);
    const { user, updateUser} = userCon;

    const [changedDetails, setChangedDetails] = useState({
        name: user.name,
        email: user.email
      });

      const setValues = (e) => {
        setChangedDetails({ ...changedDetails, [e.target.name]: e.target.value });
      };

      const handleSubmit =  () =>{
        updateUser(changedDetails.name);
        showAlert('User Edited succesfully', 'success')
        navigate('/')
      }

      useEffect( () => {
        if(localStorage.getItem('token')){
          setChangedDetails({
            name: user.name,
            email: user.email
          })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      
  return (
    <div>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUser