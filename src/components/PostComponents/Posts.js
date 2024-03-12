import React, { useContext, useEffect, useRef } from "react";
import postContext from "../../context/posts/postContext";
import PostItem from "./PostItem";
import AddPostForm from "./AddPostForm";

const Posts = (props) => {
  const context = useContext(postContext);
  const { posts, getPosts } = context;
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePost = (post) => {
    ref.current.click();
  };
  const ref = useRef(null);
  return (
    <>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Post</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <AddPostForm hangeFormVisibality={props.changeFormVisibality}
        formVisibality={props.formVisibality}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>

      <div className="row my-3">
        <h1>Posts</h1>
        {posts.map((post) => {
          return (
            <PostItem key={post._id} post={post} updatePost={updatePost} />
          );
        })}
      </div>
    </>
  );
};

export default Posts;
