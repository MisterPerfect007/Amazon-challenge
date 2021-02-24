import React from 'react';
import './CreateAccount.css';
import {Link} from 'react-router-dom';

function CreateAccount() {
    return (
        <div className="createAccount">
             <Link to="/">
                <img 
                    className="createAccount__image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo" />
            </Link>
            
            <div className="createAccount__container">
                <div className="createAccount__form">
                    <h1 className="createAccount__formTitle">Create Account</h1>
                    <span className="form-label">Email</span>
                    <input className="n-input" type="text" />
                    <span className="form-label">Password</span>
                    <input className="n-input" type="password" />
                    <button className="amazon-btn primary-btn createAccount__formBtn">Create your account</button>
                    <span className="createAccount__formInfo">This is an Amazon clone not the real Amazon(you can use a fack email to create account)</span>
                </div>
                <div className="createAccount__qst">You already have an account ?</div>
                <Link to="/signin">
                    <button className="amazon-btn second-btn createAccount__btn">Sign In</button>
                </Link>
                
            </div>
            <div className="createAccount__footer"></div>
        </div>
    )
}

export default CreateAccount;
