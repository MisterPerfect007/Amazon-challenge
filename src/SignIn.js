import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./SignIn.css";

const mapDispatch = (dispatch) => {
    return {
        setUser: (action) => dispatch(action)
    }
}

function SignIn(props) {
    const { setUser } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(false);
    const history = useHistory();
    const onSubmit = async () => {
        setBtnDisabled(true)
        console.log(btnDisabled);
        await auth
            .signInWithEmailAndPassword(email, password)
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
                    <input 
                        className="n-input" 
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="form-label">Password</span>
                    <input 
                        className="n-input" 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                        className={`amazon-btn primary-btn signIn__formBtn ${btnDisabled? 'disabled-btn' : ''}`}
                        disabled={btnDisabled}
                        onClick={onSubmit}
                    >Continue</button>
                    <span className="signIn__formInfo">This is an Amazon clone not the real Amazon</span>
                </div>
                <div className="signIn__qst">New to Amazon ?</div>
                <Link to="createaccount">
                    <button 
                        className="amazon-btn second-btn signIn__btn"
                        disabled={btnDisabled}
                    >Create your Amazon account</button>
                </Link>
                
            </div>
            <div className="signIn__footer"></div>
        </div>
    )
}

export default connect(null, mapDispatch) (SignIn);
