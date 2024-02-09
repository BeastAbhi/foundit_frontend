import React, { useContext, useState } from "react";
import postContext from "../context/posts/postContext";


function PostItem(props) {
  const context = useContext(postContext);
  const { deletePost, editPost } = context;

  const [Visibality, setVisibality] = useState(false);
  const [ActualPost, setActualPost] = useState("");

  const changeVisibality = (post) => {
    setActualPost(post);
    setVisibality(!Visibality);
  };
  const { post } = props;

  return (
    <>
      <div
        className="col-md-3"
        onClick={() => {
          changeVisibality(post);
        }}
      >
        <div className="card  my-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.itemName}</h5>
            <p className="card-text">Collect from: {post.collectFrom}</p>
            <p className="card-text">Contact {post.contact}</p>
          </div>
        </div>
      </div>

      <div
        className="col-md-3"
        style={{
          display: `${Visibality ? "block" : "none"}`,
          backgroundColor: "red",
        }}
      >
        <div className="card  my-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ActualPost.itemName}</h5>
            <p className="card-text">Collect from: {ActualPost.collectFrom}</p>
            <p className="card-text">Contact {ActualPost.contact}</p>
            <div className="d-flex flex-row-reverse">
              <i className="bi bi-recycle mx-2" onClick={() =>{deletePost(post._id)}}>🗑️</i>
              <i className="bi bi-recycle mx-2" onClick={() =>{editPost(post._id)}}>✏️</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
