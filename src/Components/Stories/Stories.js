import React from "react";
import "./Stories.scss";
import { user } from "../../Images";

const Stories = () => {
  return (
    <div className="app__stories">
      <div className="app__stories-container">
        <div className="status">
          <img src={user} alt="" />
        </div>
        <div className="status">
          <img src={user} alt="" />
        </div>
        <div className="status">
          <img src={user} alt="" />
        </div>
        <div className="status">
          <img src={user} alt="" />
        </div>
        <div className="status">
          <img src={user} alt="" />
        </div>
        <div className="status">
          <img src={user} alt="" />
        </div>
        <div className="status">
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stories;
