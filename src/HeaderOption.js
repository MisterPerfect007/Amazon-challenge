import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './HeaderOption.css';

const mapState = (state) => {
    return {
        user: state.user
    }
}
const mapDispatch = (dispatch) => {
    return {
        setUser: (action) => dispatch(action)
    }
}
function HeaderOption({ user, setUser }) {
    const deleteUser = () => {
        setUser({
            type: 'SET_USER',
            payload: null
        })
    }
    //Use the pathname method 
    const location =useLocation()
    return (
        <div className="header__option">
            <Link to={user? location.pathname : "/signin"}>
                <div 
                    className="header__optionEl" 
                    onClick={user && deleteUser}
                >
                    <span className="header__optionLineOne">Hello{user && `, ${user.email}`}</span>
                    <span className="header__optionLineTwo">{user? 'Log out' : 'Sign in'}</span>
                </div>
            </Link>
            <div className="header__optionEl">
                <span className="header__optionLineOne">Returs</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            <div className="header__optionEl">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </div>
    )
}

export default connect(mapState, mapDispatch) (HeaderOption);
