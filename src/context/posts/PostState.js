import { useState } from "react";
import PostContext from "./postContext";


const PostState = (props) => {

  const host = process.env.REACT_APP_HOST_LINK;
  const postsInitial = [];
  const [posts, setPosts] = useState(postsInitial);

  //Get all Posts
  const getPosts = async () => {
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
    setPosts(json);
  };

  //Add Post
  const addPost = async (itemName, collectFrom, contact, image, description) => {
    //API call
    const response = await fetch(`${host}/api/posts/addpost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjZiYTI3YWFkOGNlMDgwOTU2ZjkyIn0sImlhdCI6MTcwNTE0MzIwMn0.TLpZsypxCZhjt4dAqHnxQFlekLNeuaL5O9oKigibMf4",
      },
      body: JSON.stringify({itemName, collectFrom, contact, image, description})
    });
    const json = response.json;
    console.log(json)
    //Logic to add new Post
    let post = {
      _id: "65a27fcbc44ab899e190d0f813",
      user: "65a26ba27aad8ce080956f92",
      itemName: itemName,
      collectFrom: collectFrom,
      contact: contact,
      image: image,
      description: description,
      date: "2024-01-13T12:19:23.481Z",
      __v: 0,
    };
    setPosts(posts.concat(post));
  };

  //Delete Post
  const deletePost = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/posts/deletepost/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjZiYTI3YWFkOGNlMDgwOTU2ZjkyIn0sImlhdCI6MTcwNTE0NTY5MX0.jGGDvioAG5tQ1cW4R510Ugy--BKtFSfngVYC-j36t_0",
      }
    });
    const json = response.json;
    //Delete the image from cloudinary TODO:


    //Logic to Delete an post
    let newPost = posts.filter((note) => {
      return note._id !== id;
    });
    setPosts(newPost);
  };

  //Edit Post
  const editPost = async (
    id,
    itemName,
    collectFrom,
    contact,
    description,
  ) => {
    //API call
    const response = await fetch(`${host}/api/posts/updatepost/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjZiYTI3YWFkOGNlMDgwOTU2ZjkyIn0sImlhdCI6MTcwNTE0NTY5MX0.jGGDvioAG5tQ1cW4R510Ugy--BKtFSfngVYC-j36t_0",
      },
      body: JSON.stringify({
        itemName,
        collectFrom,
        contact,
        description,
      }),
    });
    const json = response.json;

    //This line make a deep copy of an post
    let newPost = JSON.parse(JSON.stringify(posts))
    //Logic to edit an post
    for (let index = 0; index < newPost.length; index++) {
      const element = newPost[index];
      if (element._id === id) {
        newPost[index].itemName = itemName;
        newPost[index].collectFrom = collectFrom;
        newPost[index].contact = contact;
        newPost[index].description = description;
        break
      }
    }
    setPosts(newPost)
  };

  return (
    <PostContext.Provider
      value={{ posts, addPost, deletePost, editPost, getPosts }}
    >
      {/* this line is compersory for using context api */}
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
