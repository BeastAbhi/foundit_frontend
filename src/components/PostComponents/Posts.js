import React, { useContext, useEffect, useRef, useState } from "react";
import postContext from "../../context/posts/postContext";
import PostItem from "./PostItem";
import ActivePostItem from "./ActivePostItem";
import alertContext from "../../context/alerts/alertContext";
import { useNavigate } from "react-router-dom";

const Posts = (props) => {
  const alertcon = useContext(alertContext);
  const { showAlert } = alertcon;
  const context = useContext(postContext);
  const { posts, getPosts, editPost, getUserPosts } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (!props.userSpecific) {
        getPosts();
      } else {
        getUserPosts();
      }
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //This line is to set the visiblity of an actual post div
  const [ActualPost, setActualPost] = useState("");
  const [Visibality, setVisibality] = useState(false);
  const changeVisibality = (post) => {
    setActualPost(post);
    setVisibality(!Visibality);
  };
  const [post, setPost] = useState({
    id: "",
    eitemName: "",
    ecollectFrom: "",
    econtact: "",
    edescription: "",
    eimage: "",
  });

  const updatePost = (currentPost) => {
    ref.current.click();
    setPost({
      id: currentPost._id,
      eitemName: currentPost.itemName,
      ecollectFrom: currentPost.collectFrom,
      econtact: currentPost.contact,
      edescription: currentPost.description,
      eimage: currentPost.image,
    });
  };
  const ref = useRef(null);
  const refClose = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    editPost(
      post.id,
      post.eitemName,
      post.ecollectFrom,
      post.econtact,
      post.edescription
    );
    refClose.current.click();
    setVisibality(!Visibality);
    showAlert("Updated successfully", "success");
  };

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center position-relitive">
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <fieldset>
                  <div className="mb-3">
                    <img
                      className="w-50 h-50 d-block"
                      src={post.eimage}
                      alt=""
                    />
                    <sup>You can't change the image</sup>

                    <input
                      type="text"
                      name="eitemName"
                      className="form-control"
                      placeholder="Item Name"
                      value={post.eitemName}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="ecollectFrom"
                      className="form-control"
                      placeholder="Collect form"
                      value={post.ecollectFrom}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="econtact"
                      className="form-control"
                      placeholder="Contact"
                      value={post.econtact}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="edescription"
                      className="form-control"
                      placeholder="Description"
                      value={post.edescription}
                      onChange={onChange}
                    />
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  post.eitemName.length < 3 ||
                  post.econtact.length < 5 ||
                  post.ecollectFrom.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Posts</h1>
        <div className="container">
          {posts.length === 0 && "No posts yet!!"}
          {/* {console.log(posts)} */}
        </div>
        {posts.map((post) => {
          return (
            <PostItem
              key={post._id}
              post={post}
              changeVisibality={changeVisibality}
            />
          );
        })}
      </div>
      <ActivePostItem
        updatePost={updatePost}
        Visibality={Visibality}
        ActualPost={ActualPost}
        changeVisibality={changeVisibality}
        givePower={props.givePower}
      />
    </div>
  );
};

export default Posts;
