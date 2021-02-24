import React from 'react';
import CartEmpty from './CartEmpty';
import CartFull from './CartFull';
import './Cart.css';
import { connect } from 'react-redux';

const mapState = (state) =>{
    return {
        basket: state.basket
    }
}

function Cart({basket}) {
    const basketLength = basket.length;
    return (
        <div className="cart">
            {/* IF cart is empty */}
            {/* <CartEmpty /> */}
            {basketLength > 0? <CartFull /> : <CartEmpty />}
        </div>
    )
}

export default connect(mapState) (Cart);

// https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg
