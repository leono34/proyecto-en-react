import React from "react";
import "./login.css";


class Login extends React.Component {
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
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">
                                        Username
                </label>
                                    <input type="text" className="input" id="user" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Password
                </label>
                                    <input
                                        type="password"
                                        className="input"
                                        id="pass"
                                        datatype="password"
                                    />
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" class="check" />
                                    <label htmlFor="check">
                                        <span class="icon"></span> Keep me Signed in
                </label>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input id="user" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" datatype="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Repeat Password</label>
                                    <input id="pass" type="password" className="input" datatype="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Email Address</label>
                                    <input id="pass" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    Login
}