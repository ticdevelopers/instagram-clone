import React from "react";
import { Post } from "../../Components";
import "./Posts.scss";

const Posts = () => {
  return (
    <div className="app__posts">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
