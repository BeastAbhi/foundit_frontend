import React, { useState } from "react";
import AddPostForm from "./AddPostForm";

function Home() {
  const [formVisibality, setFormVisibality] = useState(false)
  const changeFormVisibality = () =>{
    setFormVisibality(!formVisibality)
  }
  return (
    <>
      <h1>Posts</h1>
        <AddPostForm changeFormVisibality={changeFormVisibality} formVisibality={formVisibality}/>
      <button type="button" className="btn btn-primary" onClick={changeFormVisibality}>
        Add Post
      </button>
    </>
  );
}

export default Home;
