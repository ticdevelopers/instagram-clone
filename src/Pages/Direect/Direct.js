import React, { useState } from "react";
import "./Direct.scss";
import { Conversation } from "../../Components";

const Direct = () => {
  const [currentChat, setCurrentChat] = useState(false);
  return (
    <div className="app__direct">
      <div className="direct__container">
        <div className="direct__sidebar">
          <div className="direct__sidebar-top">
            <p>zenithnoble</p>
          </div>
          <div className="conversation__container">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="direct__content">
          {currentChat ? (
            <div className="direct__content-container"></div>
          ) : (
            <div className="app__noCurrent__chat">
              <div className="svg__wrapper">
                <svg
                  aria-label="Direct"
                  class="_8-yf5 "
                  fill="#262626"
                  height="60"
                  viewBox="0 0 48 48"
                  width="60"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
              </div>

              <p>Your Messages</p>
              <span>
                Send private photos and messages to a friend or group.
              </span>

              <button>Send Message</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Direct;
