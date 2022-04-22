import React from "react";
import "./Post.scss";
import { user } from "../../Images";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoodIcon from "@mui/icons-material/Mood";

const Post = () => {
  return (
    <div className="app__post">
      <div className="app__post-top">
        <div className="top__container">
          <div className="top__container-user">
            <div className="poststatus">
              <img src={user} alt="" />
            </div>
            <span>zenith noble</span>
          </div>
          <div className="top__container-options">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="post__img-container">
        <img src={user} alt="" />
      </div>
      <div className="posts__reactions-container">
        <div className="reactions__top">
          <div className="reactions__top-left">
            <FavoriteBorderOutlinedIcon />
            <SendIcon className="rotate" />
          </div>
          <div className="reactions__top-right">save</div>
        </div>
        <div className="container__content">
          <span>104 likes</span>
          <p>zenithnoble Lorem ipsum dolor sit amet.</p>
          <p className="post__view">View all comments</p>
          <p className="time__post">1 hour ago</p>
        </div>
      </div>

      <div className="post__comments">
        <div className="comment__container">
          <MoodIcon />
          <input type="text" placeholder="Add a comment..." />
        </div>

        <button>Post</button>
      </div>
    </div>
  );
};

export default Post;
