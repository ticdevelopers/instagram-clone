import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="app__login">
      <div className="login__container">
        <div className="logo">HowToGram</div>
        <form className="login__form">
          <div className="form__input-Container">
            <input type="email" required placeholder="Email address" />
          </div>
          <div className="form__input-Container">
            <input type="password" required placeholder="Password" />
          </div>
          <button>Login</button>
        </form>

        <div className="or__login">
          <p>OR</p>
        </div>

        <div className="login__option-container">
          <div className="login__with google">
            <i className="fas fa-google"></i>
            <span>Google</span>
          </div>
          <div className="login__with gihub">
            <i className="fas fa-github"></i>
            <span>Github</span>
          </div>
        </div>
        <div className="forgot__container">
          <p>Forgot password?</p>
        </div>
      </div>

      <div className="login__footer">
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
