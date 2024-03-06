import React, { useState } from "react";
import AddPostForm from "./PostComponents/AddPostForm";
import Posts from "./PostComponents/Posts";

function Home() {

  const [formVisibality, setFormVisibality] = useState(false);
  const changeFormVisibality = () => {
    setFormVisibality(!formVisibality);
  };
  return (
    <>
      <AddPostForm
        changeFormVisibality={changeFormVisibality}
        formVisibality={formVisibality}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={changeFormVisibality}
      >
        Add Post
      </button>
      <Posts/>
    </>
  );
}

export default Home;
