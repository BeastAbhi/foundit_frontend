import React, { useState } from "react";
import AddPostForm from "./PostComponents/AddPostForm";
import Posts from "./PostComponents/Posts";
import "../style/addPostButton.css";

function Home() {
  const [formVisibality, setFormVisibality] = useState(false);
  const changeFormVisibality = () => {
    setFormVisibality(!formVisibality);
  };;
  return (
    <div style={{ position: "relative", height: "100%", width: "100%", marginTop:"100px"}}>
      <AddPostForm
        changeFormVisibality={changeFormVisibality}
        formVisibality={formVisibality}
      />
      <button
        className="buttonAdd"
        type="button"
        onClick={changeFormVisibality}
        style={{ position: "absolute", top: "20px", right: "-10px" }}
      >
        <span className="button__text">Add Post</span>
        <span className="button__icon">
          <svg
            className="svg"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>

      <Posts userSpecific={false} givePower={false} />
      
    
    </div>
  );
}

export default Home;
