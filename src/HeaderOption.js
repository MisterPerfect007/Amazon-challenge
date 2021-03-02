import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderOption.css';

function HeaderOption() {
    return (
        <div className="header__option">
            <Link to="/signin">
                <div className="header__optionEl" >
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign In</span>
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

export default HeaderOption;
