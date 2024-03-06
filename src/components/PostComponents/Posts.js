import React, { useContext, useEffect } from "react";
import postContext from "../../context/posts/postContext";
import PostItem from "./PostItem";



const Posts = () => {
  const context = useContext(postContext);
  const { posts, getPosts } = context;
  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <div className="row my-3">
        <h1>Posts</h1>
        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Posts;
