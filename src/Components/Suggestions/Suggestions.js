import React from "react";
import "./Suggestions.scss";
import { user } from "../../Images";

const Suggestions = () => {
  return (
    <div className="app__suggestions">
      <div className="suggestion__container">
        <div className="user__suggestion">
          <div className="user__container">
            <img src={user} alt="" />
            <div className="name__wrapper">
              <span>zenithnoble</span>
              <p>Zenith Noble</p>
            </div>
          </div>
          <button>Switch</button>
        </div>
        <div className="suggestion__title">
          <p>Suggestions for you</p>
          <span>See all</span>
        </div>

        <div className="suggestion__content">
          <div className="user__suggestion">
            <div className="user__container">
              <img src={user} alt="" />
              <div className="name__wrapper">
                <span>zenithnoble</span>
                <p>Follows you </p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__suggestion">
            <div className="user__container">
              <img src={user} alt="" />
              <div className="name__wrapper">
                <span>zenithnoble</span>
                <p>Follows you </p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__suggestion">
            <div className="user__container">
              <img src={user} alt="" />
              <div className="name__wrapper">
                <span>zenithnoble</span>
                <p>Follows you </p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__suggestion">
            <div className="user__container">
              <img src={user} alt="" />
              <div className="name__wrapper">
                <span>zenithnoble</span>
                <p>Follows you </p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__suggestion">
            <div className="user__container">
              <img src={user} alt="" />
              <div className="name__wrapper">
                <span>zenithnoble</span>
                <p>Follows you </p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
