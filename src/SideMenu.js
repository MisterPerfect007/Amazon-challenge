import React, { useRef } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

function SideMenu({style, handleMenuState}) {
    const contentRef = useRef(null)
    const handleClick = (e) => {
        if(e.target === contentRef.current){ 
            handleMenuState();
        }
    }
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
                    <div className="">
                        <AccountCircleIcon />
                        <span className="">Hello{user && `, ${user.email}`}</span>
                    </div>
                </Link>
            </div>
        </animated.div>
    )
}

export default SideMenu
