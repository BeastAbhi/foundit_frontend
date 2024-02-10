import { useState } from "react";
import PostContext from "./postContext";
import axios from "axios";

const PostState = (props) => {
  //Function to convert image to string base64


  //PUT this url in the .env file
  const host = "http://localhost:5000";
  const postsInitial = []
  const [posts, setPosts] = useState(postsInitial);

  //Get all Posts
    const getPosts = async() =>{
        //Api Call
        const response = await fetch(`${host}/api/posts/fetchallposts`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjZiYTI3YWFkOGNlMDgwOTU2ZjkyIn0sImlhdCI6MTcwNTE0MzIwMn0.TLpZsypxCZhjt4dAqHnxQFlekLNeuaL5O9oKigibMf4",
            },
          });
          const json = await response.json();
          setPosts(json)
    }

  //Add Post
  const addPost = async (itemName, collectFrom, contact, image,description) => {
    //API call

    const response = await fetch(`${host}/api/posts/addpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjZiYTI3YWFkOGNlMDgwOTU2ZjkyIn0sImlhdCI6MTcwNTE0MzIwMn0.TLpZsypxCZhjt4dAqHnxQFlekLNeuaL5O9oKigibMf4",
        },
        body: JSON.stringify({itemName, collectFrom, contact, image, description}),
      });
      const json = response.json;
    //Logic to add new Post
    let post = {
      _id: "65a27fcbc44ab899e190d0f813",
      user: "65a26ba27aad8ce080956f92",
      itemName: itemName,
      collectFrom: collectFrom,
      contact: contact,
      description: description,
      date: "2024-01-13T12:19:23.481Z",
      __v: 0,
    };
    setPosts(posts.concat(post));
  };

  //Delete Post
  const deletePost = async (id) => {
    //Api Call

    //Logic to Delete an post
    let newPost = posts.filter((note) => {
      return note._id !== id;
    });
    setPosts(newPost);
  };

  //Edit Post
  const editPost = async (id, itemName, collectFrom, contact, image, description) => {
    //API call
    const response = await fetch(`${host}/api/posts/updatepost/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjZiYTI3YWFkOGNlMDgwOTU2ZjkyIn0sImlhdCI6MTcwNTE0NTY5MX0.jGGDvioAG5tQ1cW4R510Ugy--BKtFSfngVYC-j36t_0",
      },
      body: JSON.stringify({itemName, collectFrom, contact, image, description}),
    });
    const json = response.json;
    //Logic to edit an post
    for (let index = 0; index < posts.length; index++) {
      const element = posts[index];
      if (element._id === id) {
        element.itemName = itemName;
        element.collectFrom = collectFrom;
        element.contact = contact;
        element.description = description;
        element.image = image;
      }
    }
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, editPost, getPosts }}>
      {/* this line is compersory for using context api */}
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
