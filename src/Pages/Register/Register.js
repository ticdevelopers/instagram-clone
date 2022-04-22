import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="app__register">
      <div className="register__container">
        <div className="logo">HowToGram</div>
        <form className="register__form">
          <div className="form__input-Container">
            <input type="text" required placeholder="Username" />
          </div>
          <div className="form__input-Container">
            <input type="email" required placeholder="Email address" />
          </div>
          <div className="form__input-Container">
            <input type="password" required placeholder="Password" />
          </div>
          <button>Register</button>
        </form>

        <div className="or__register">
          <p>OR</p>
        </div>

        <div className="register__option-container">
          <div className="register__with google">
            <i className="fas fa-google"></i>
            <span>Google</span>
          </div>
          <div className="register__with gihub">
            <i className="fas fa-github"></i>
            <span>Github</span>
          </div>
        </div>
        <div className="forgot__container">
          <p>Forgot password?</p>
        </div>
      </div>

      <div className="register__footer">
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
