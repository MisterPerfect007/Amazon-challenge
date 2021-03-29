import React, { useState } from 'react';
import './CreateAccount.css';
import {Link, useHistory} from 'react-router-dom';
import { auth } from './firebase'
import { connect } from 'react-redux';

const mapDispatch = (dispatch) => {
    return {
        setUser: (action) => dispatch(action)
    }
}

function CreateAccount(props) {
    const { setUser } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(false);
    const history = useHistory();
    const onSubmit = async () => {
        setBtnDisabled(true)
        console.log(btnDisabled);
        await auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth) {
                    //dispatch user 
                    setUser({
                        type: 'SET_USER',
                        payload: auth.user
                    })
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        setBtnDisabled(false)
    }
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
                    <input 
                        className="n-input" 
                        type="text"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <span className="form-label">Password</span>
                    <input 
                        className="n-input" 
                        type="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                    />
                    <button 
                        className={`amazon-btn primary-btn createAccount__formBtn ${btnDisabled? 'disabled-btn' : ''}`}
                        onClick={onSubmit}
                        disabled={btnDisabled}
                    >Create your account</button>
                    <span className="createAccount__formInfo">This is an Amazon clone not the real Amazon(you can use a fack email to create account)</span>
                </div>
                <div className="createAccount__qst">You already have an account ?</div>
                <Link to="/signin">
                    <button 
                        className="amazon-btn second-btn createAccount__btn"
                        disabled={btnDisabled}
                    >Sign In</button>
                </Link>
                
            </div>
            <div className="createAccount__footer"></div>
        </div>
    )
}

export default connect(null, mapDispatch)(CreateAccount);
