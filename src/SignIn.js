import React from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css";

function SignIn() {
    return (
        <div className="signIn">
            <Link to="/">
                <img 
                    className="signIn__image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo" />
            </Link>
            
            <div className="signIn__container">
                <div className="signIn__form">
                    <h1 className="signIn__formTitle">Sign-In</h1>
                    <span className="form-label">Email</span>
                    <input className="n-input" type="text" />
                    <span className="form-label">Password</span>
                    <input className="n-input" type="password" />
                    <button className="amazon-btn primary-btn signIn__formBtn">Continue</button>
                    <span className="signIn__formInfo">This is an Amazon clone not the real Amazon</span>
                </div>
                <div className="signIn__qst">New to Amazon ?</div>
                <Link to="createaccount">
                    <button className="amazon-btn second-btn signIn__btn">Create your Amazon account</button>
                </Link>
                
            </div>
            <div className="signIn__footer"></div>
        </div>
    )
}

export default SignIn;
