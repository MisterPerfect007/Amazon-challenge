import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapState = (state) => {
    return {
        basket: state.basket
    }
}

function Header(props) {
    const { basket } = props;
    let totalAmount = 0;
    basket.forEach(item => {
        totalAmount += item.amount;
    });
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <div className="header__searchIcon">
                    <SearchIcon />
                </div>
            </div>
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
            <Link to="/cart">
                <div className="header__cart">
                    <ShoppingBasketIcon />
                    <span className="header__cartCount">{totalAmount}</span>
                </div>
            </Link>
            
        </div>
    )
}

export default connect(mapState)(Header);
