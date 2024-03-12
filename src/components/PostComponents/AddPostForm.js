import React, { useContext, useState } from "react";
import postContext from "../../context/posts/postContext";

function AddPostForm(props) {
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
    changeFormVisibality();
    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    data.append("cloud_name", process.env.REACT_APP_UPLOAD_PRESET);
    fetch(process.env.REACT_APP_IMAGE_UPLOAD_LINK,{
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
      })
      .catch((err) => {
        console.log(err);
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
        }}
      >
        <form
          style={{
            display: `${formVisibality ? "block" : "none"}`,
            position: "absolute",
            top: "50%",
            right: "50%%",
            backgroundColor: "red",
          }}
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
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="collectFrom"
                className="form-control"
                placeholder="Collect form"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="contact"
                className="form-control"
                placeholder="Contact"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Description"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                name="image"
                className="form-control"
                accept="image/*"
                onChange={onFileChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Post
            </button>
          </fieldset>
        </form>
      </div>
  );
}

export default AddPostForm;