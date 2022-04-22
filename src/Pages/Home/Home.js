import React from "react";
import { Stories, Suggestions } from "../../Components";
import { Posts } from "../index";
import "./Home.scss";

const Home = () => {
  return (
    <div className="app__home">
      <Stories />
      <div className="app__home-container">
        <Posts />
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
