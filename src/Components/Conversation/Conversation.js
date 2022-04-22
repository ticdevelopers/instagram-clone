import React from "react";
import "./Conversation.scss";
import { user } from "../../Images";

const Conversation = () => {
  return (
    <div className="app__conversation">
      <img src={user} alt="" />
      <div className="message__wrapper">
        <p>zentihnoble</p>
        <p>zenith and the others are here today with the main only the man</p>
      </div>
    </div>
  );
};

export default Conversation;
