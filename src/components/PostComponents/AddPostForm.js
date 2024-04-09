import React, { useContext, useState } from "react";
import postContext from "../../context/posts/postContext";
import alertContext from "../../context/alerts/alertContext";
import "../../style/postButton.css";
import "../../style/cancleButton.css";

function AddPostForm(props) {
  const alertcon = useContext(alertContext);
  const { showAlert } = alertcon;
  const { changeFormVisibality, formVisibality } = props;
  const context = useContext(postContext);
  const { addPost } = context;
  const [post, setPost] = useState({
    itemName: "",
    collectFrom: "",
    contact: "",
    image: "",
    description: "",
    imageId: "",
  });
  const [selectedImage, setSelectedImage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    showAlert("Posting.....", "success",3000);
    changeFormVisibality();
    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    data.append("cloud_name", process.env.REACT_APP_UPLOAD_PRESET);
    fetch(process.env.REACT_APP_IMAGE_UPLOAD_LINK, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        post.image = data.url;
        post.imageId = data.public_Id;
        addPost(
          post.itemName,
          post.collectFrom,
          post.contact,
          post.image,
          post.description,
          post.imageId
        );
        showAlert("Post added", "success");
      })
      .catch((err) => {
        showAlert(err, "danger");
      });
    setPost({
      itemName: "",
      collectFrom: "",
      contact: "",
      image: "",
      description: "",
      imageId: "",
    });
  };

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "red",
        zIndex: "10",
        top:"100px"
      }}
    >
      <form
        style={{
          display: `${formVisibality ? "block" : "none"}`,
          position: "absolute",
          top: "50%",
          right: "50%%",
          padding: "35px",
          background:
            "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)",
          borderRadius: "10px",
        }}
        onSubmit={handleClick}
      >
        <fieldset>
          <legend>Post</legend>
          <div className="mb-3">
            <input
              type="text"
              name="itemName"
              className="form-control"
              placeholder="Item Name"
              onChange={onChange}
              minLength={5}
              required
              value={post.itemName}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="collectFrom"
              className="form-control"
              placeholder="Collect form"
              onChange={onChange}
              minLength={5}
              required
              value={post.collectFrom}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="contact"
              className="form-control"
              placeholder="Contact"
              onChange={onChange}
              minLength={5}
              required
              value={post.contact}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={onChange}
              value={post.description}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={onFileChange}
              required
            />
          </div>
          <div className="d-flex justify-content-around ">
            <button className="continue-application">
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
              </div>
              Post
            </button>
            <button type="button" className="btn btn-danger" onClick={changeFormVisibality}>Cancel</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddPostForm;
