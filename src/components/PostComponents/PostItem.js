import React from "react";

function PostItem(props) {

  const { post, changeVisibality } = props;
  return (
    <>
      <div
        className="col-md-3"
        onClick={() => {
          changeVisibality(post);
        }}
      >
        <div className="card  my-3">
        <img src={post.image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{post.itemName}</h5>
            <p className="card-text">Collect from: {post.collectFrom}</p>
            <p className="card-text">Contact {post.contact}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
