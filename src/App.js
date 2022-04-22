import React, { Fragment, useCallback, useState } from "react";
import "./App.scss";
import { Navbar } from "./Components";
import { Home, Login, Register, Profile, Direct } from "./Pages";
import { Routes, Route, useLocation } from "react-router-dom";
import { user } from "./Images";
import { useDropzone } from "react-dropzone";

const App = () => {
  const [popUp, setPopUp] = useState(false);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    console.log("miles");
    acceptedFiles.forEach((acceptedFile) => {
      setFile(acceptedFile);
    });
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  const location = useLocation();
  const pathname = location.pathname.slice(1);

  let characterLimits = 2200;

  const handleChange = (event) => {
    if (characterLimits - event.target.value.length >= 0) {
      setCaption(event.target.value);
    }
  };
  return (
    <div className="app">
      {pathname === "login" || pathname === "register" ? null : (
        <Navbar setPopUp={setPopUp} popUp={popUp} />
      )}
      <div className="app__wrapper">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="direct" element={<Direct />} />
        </Routes>
      </div>

      {popUp && (
        <div className="app__popup">
          <div className={file ? "popup__container file" : "popup__container"}>
            <div
              className={
                file ? "top__container app__justify" : "top__container"
              }
            >
              {file && (
                <p onClick={() => setFile(null)} className="null__File">
                  back
                </p>
              )}

              <p>Create new post</p>

              {file && <button>Share</button>}
            </div>
            <div className="popup__content">
              {file ? (
                <div className="file__Wrapper">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    style={{ maxWidth: "100%" }}
                    className="shareImg"
                  />
                  <div className="file__captions">
                    <div className="caption__user app__flex">
                      <img src={user} alt="miles morales" />
                      <span>zenithnoble</span>
                    </div>
                    <textarea
                      onChange={handleChange}
                      value={caption}
                      placeholder="Write caption"
                    />
                    <p className="characterLimit">
                      {characterLimits - caption.length}/{"2,200"}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    {...getRootProps()}
                    className={
                      isDragActive
                        ? "popuup__img-container activeDrop"
                        : "popuup__img-container"
                    }
                  >
                    <input {...getInputProps()} />
                    <img src={user} alt="" />
                    <img src={user} alt="" />
                  </div>
                  <p>Drag photos and videos here</p>
                  <label htmlFor="file">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <span>Select from Computer</span>
                  </label>
                </>
              )}
            </div>
          </div>
          <p className="closePostPop" onClick={() => setPopUp(!popUp)}>
            +
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
