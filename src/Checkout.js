import React from 'react';
import { connect } from 'react-redux';
import './Checkout.css';

const mapState = (state) => {
    return {
        basket: state.basket
    }
}

function Checkout(props) {
    const { basket } = props;
    let totalPrice = 0;
    let totalAmount = 0;
    basket.forEach(item => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
    });
    return (
        <div className="checkout">
            <span className="checkout__info">Subtotal ({totalAmount} {totalAmount > 1? "items": "item"}): <span className="big-price">${totalPrice.toFixed(2)}</span></span>
            <div className="checkout__checkbox">
                <input type="checkbox" />
                <span>This order contains a gift</span>
            </div>
            <button className="checkout__btn amazon-btn primary-btn">Proceed to checkout</button>
        </div>
    )
}

export default connect(mapState)(Checkout);
