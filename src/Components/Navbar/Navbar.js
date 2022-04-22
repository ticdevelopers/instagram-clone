import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { user } from "../../Images";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Navbar = ({ popUp, setPopUp }) => {
  const [profile, setProfile] = useState(false);
  const [pop, setPop] = useState(false);
  const [search, setSearch] = useState([]);
  const [searchPopup, setSearchPopup] = useState(false);
  const [valid, setValid] = useState("");

  const users = {
    username: "zenith",
  };

  let name = `${window.location}${users.username}`;
  const handleSignOut = () => {
    setPop(true);
    if (valid === name) {
      localStorage.clear("user");
      window.location.reload();
    } else return;
  };

  const handleSearch = () => {
    console.log(search);
    setSearchPopup(true);
  };
  return (
    <div className="app__navbar app__flex">
      <div className="app__navbar-container app__flex">
        <div className="container__logo">
          <Link to="/">
            <p>HowToGram</p>
          </Link>
        </div>

        <div className="app__navbar-wrapper">
          <div className="container__search" onClick={handleSearch}>
            {searchPopup ? null : <i className="fas fa-search"></i>}
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            {searchPopup && (
              <div className="close__pop">
                <i
                  style={{ cursor: "pointer" }}
                  className="fas fa-times"
                  onClick={() => setSearchPopup(false)}
                ></i>
              </div>
            )}
            {searchPopup && (
              <div className="search__wrapper">
                <div className="search__result"></div>
              </div>
            )}
          </div>
          <ul className="container__routes ul app__flex">
            <li className="routes__links">
              <Link to="/">
                <HomeOutlinedIcon />
              </Link>
            </li>
            <li className="routes__links">
              <Link to="/direct">
                <SendOutlinedIcon className="rotate" />
              </Link>
            </li>
            <li className="routes__links">
              <AddBoxOutlinedIcon onClick={() => setPopUp(!popUp)} />
            </li>
            <li className="routes__links">
              <ExploreOutlinedIcon />
            </li>
            <li className="routes__links">
              <FavoriteBorderOutlinedIcon />
            </li>
            <div className="container__profile app__flex">
              <img src={user} alt="" onClick={() => setProfile(!profile)} />

              <div
                className={
                  profile
                    ? "container__profile-dropdown open"
                    : "container__profile-dropdown"
                }
              >
                <ul
                  className="profile__dropdown ul"
                  onClick={() => setProfile(!profile)}
                >
                  <li>
                    <Link to="/profile">
                      <AccountCircleOutlinedIcon /> <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <BookmarkBorderOutlinedIcon /> <span>Saved</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>{" "}
                    <span>Settings</span>
                  </li>
                  <li>
                    <CachedOutlinedIcon /> <span>Switch Account</span>
                  </li>
                  <li onClick={handleSignOut}>sign Out</li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>

      {pop && (
        <div className="app__pop">
          <div className="app__pop-confirm">
            <p>To Sign Out please inter the text in red in the input</p>
            <span className={valid === name ? "span ok" : "span"}>{name}</span>
            <input
              type="text"
              placeholder="write here"
              value={valid}
              onChange={(e) => setValid(e.target.value)}
            />
            <div className="pop__btn-container">
              <button className="pop__cancel" onClick={() => setPop(!pop)}>
                Cancel
              </button>
              <button
                className={valid === name ? "btnClear clear" : "btnClear"}
                disabled={valid !== name}
                onClick={() => console.log("clicked........")}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
