import React, { useRef } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import './SideMenu.css';
import { Link, useLocation } from 'react-router-dom';
import { animated } from 'react-spring';
import { connect } from 'react-redux';

const mapState = (state) => {
    return {
        user: state.user
    }
}
const mapDispatch = (dispatch) => {
    return {
        deleteUser: (action) => dispatch(action)
    }
}

function SideMenu({style, handleMenuState, user, deleteUser}) {
    const contentRef = useRef(null)
    const handleClick = (e) => {
        if(e.target === contentRef.current){ 
            handleMenuState();
        }
    }
    const logOut = () => {
        deleteUser({
            type: 'SET_USER',
            payload: null
        })
    }
    const location = useLocation()
    return (
        <animated.div className="sideMenu" style={style} onClick={handleClick} ref={contentRef}>
            <div className="sideMenu__content" >
                <CloseIcon className="sideMenu__icon" onClick={handleMenuState}/>
                <div className="sideMenu__search">
                    <input
                        className="sideMenu__searchInput"
                        type="text"
                    />
                    <div className="sideMenu__searchIcon">
                        <SearchIcon />
                    </div>
                </div>
                {/* <Link to={user? location.pathname : "/signin"}>
                <div 
                    className="header__optionEl" 
                    onClick={user && deleteUser}
                >
                    <span className="header__optionLineOne">Hello{user && `, ${user.email}`}</span>
                    <span className="header__optionLineTwo">{user? 'Log out' : 'Sign in'}</span>
                </div>
            </Link> */}
                <Link to={user? location.pathname : "/signin"}>
                    <div className="sideMenu__signin">
                        <AccountCircleIcon />
                        {
                            <h2 className="sideMenu__hello">Hello,<span>{user?  `${user.email}` : "Sign in"}</span></h2>

                        }
                    </div>
                </Link>
                        {
                            user && <span 
                                        className="sideMenu__log" 
                                        onClick={logOut}
                                    >Log out</span>

                        }
            </div>
        </animated.div>
    )
}

export default connect(mapState, mapDispatch) (SideMenu)
