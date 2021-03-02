import React, { useState } from 'react';
import './Header.css';
import InputSearch from './InputSearch';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderOption from './HeaderOption';
import SideMenu from './SideMenu';
import { useSpring } from 'react-spring';

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
    //for handling click on the menu icon
    const [visibleMenu, setVisibleMenu] = useState(false)
    //Amination with Spring
    const anim = useSpring({
        opacity: visibleMenu? 1 : 0,
        transform: visibleMenu? `translateX(0)` : `translateX(-100%)`,
        // display: visibleMenu? 'block' : 'none'
    })
    const handleMenuState = () => {
        setVisibleMenu(!visibleMenu);
    }
    // //function to hidden some components when window.innerWidth < 700px
    // const handleScreen = () => {
    //     window.innerWidth < 700? setSmallScreen(true):setSmallScreen(false);
    // }
    // window.addEventListener('resize', handleScreen);
    return (
        <div className="header">
            <SideMenu style={anim} handleMenuState={handleMenuState}/>
            <div className="header__menuIcon">
                <MenuIcon  onClick={handleMenuState}/>
            </div>
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
             <InputSearch />
             <HeaderOption />
                
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
