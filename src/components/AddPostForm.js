import React, { useContext, useState } from "react";
import postContext from "../context/posts/postContext";

function AddPostForm(props) {
  const { changeFormVisibality, formVisibality } = props;
  const context = useContext(postContext);
  const { addPost } = context;
  const [post, setPost] = useState({itemName: "", collectFrom: "", contact: "", image: "",description: ""})

  const handleClick = (e) => {
    e.preventDefault()
    changeFormVisibality();
    addPost(post.itemName, post.collectFrom, post.contact, post.image, post.description)
  };

  const onChange = (e) =>{
      setPost({...post, [e.target.name]: e.target.value})
  }
  const onFileChange = async (e) =>{
    // const file = e.target.files[0]
    // const base64 = await convertToBase64(file)
    // setPost({...post, [e.target.name]: base64})
    setPost({...post, [e.target.name]: e.target.files[0]})
  }
  return (
    <>
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
    </>
  );
}

export default AddPostForm;

//This function will convert image to base64 Format
// function convertToBase64(file){
//   return new Promise((resolve, reject) =>{
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.onload = () =>{
//       resolve(fileReader.result)
//     };
//     fileReader.onerror = (error) =>{
//       reject(error)
//     }
//   })
// }