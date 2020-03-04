import React from "react";
import "./login.scss";
import {
  SignIn,
  SignUp
} from "./"
class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <div className="login-wrap">
          <div className="login-html">
            <input
              type="radio"
              id="tab-1"
              name="tab"
              className="sign-in"
              checked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input type="radio" className="sign-up" id="tab-2" name="tab" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <SignIn />
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Auth
}