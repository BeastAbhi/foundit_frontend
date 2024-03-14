import { useState } from "react";
import PostContext from "./postContext";

const PostState = (props) => {
  const host = process.env.REACT_APP_HOST_LINK;
  const postsInitial = [];
  const [posts, setPosts] = useState(postsInitial);
  const authToken = localStorage.getItem("token");

  //Get all Posts
  const getPosts = async () => {
    //Api Call
    const response = await fetch(`${host}/api/posts/fetchallposts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    setPosts(json);
  };

    //Get user's Posts
    const getUserPosts = async () => {
      //Api Call
      const response = await fetch(`${host}/api/posts/yourposts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });
      const json = await response.json();
      setPosts(json);
    };

  //Add Post
  const addPost = async (
    itemName,
    collectFrom,
    contact,
    image,
    description
  ) => {
    //API call
    const response = await fetch(`${host}/api/posts/addpost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({
        itemName,
        collectFrom,
        contact,
        image,
        description,
      }),
    });
    const post = await response.json();
    //Logic to add new Post
    setPosts(posts.concat(post));
  };

  //Delete Post
  const deletePost = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/posts/deletepost/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    // const json = response.json();
    response.json()
    //Delete the image from cloudinary TODO:

    //Logic to Delete an post
    let newPost = posts.filter((note) => {
      return note._id !== id;
    });
    setPosts(newPost);
  };

  //Edit Post
  const editPost = async (id, itemName, collectFrom, contact, description) => {
    //API call
    const response = await fetch(`${host}/api/posts/updatepost/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({
        itemName,
        collectFrom,
        contact,
        description,
      }),
    });
    // const json = response.json();
    response.json()

    //This line make a deep copy of an post
    let newPost = JSON.parse(JSON.stringify(posts));
    //Logic to edit an post
    for (let index = 0; index < newPost.length; index++) {
      const element = newPost[index];
      if (element._id === id) {
        newPost[index].itemName = itemName;
        newPost[index].collectFrom = collectFrom;
        newPost[index].contact = contact;
        newPost[index].description = description;
        break;
      }
    }
    setPosts(newPost);
  };

  return (
    <PostContext.Provider
      value={{ posts, addPost, deletePost, editPost, getPosts, getUserPosts }}
    >
      {/* this line is compersory for using context api */}
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
