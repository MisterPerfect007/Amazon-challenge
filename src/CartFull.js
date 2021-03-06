import React from 'react';
import { connect } from 'react-redux';
import './CartFull.css';
import CartItem from './CartItem';
import Checkout from './Checkout'

const mapState = (state) =>{
    return {
        basket: state.basket,
        user: state.user
    }
}
function CartFull(props) {
    const {basket, user} = props
    let totalPrice = 0;
    let totalAmount = 0;
    basket.forEach(item => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
    });
    return (
        <>
            <div className="cartFull">
                <div className="cartFull-container">
                    {
                        user && <h2 className="cartFull__hello">Hello, <span>{user.email}</span></h2>
                    }
                    <div className="cartFull__header">
                        <h1>Your Shopping Cart</h1>
                        <span>Price</span>
                    </div>
                    <div className="cartFull__content">
                        {/* <CartItem />
                        <CartItem /> */}
                        {basket.map(item =>{
                            return <CartItem 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                amount={item.amount}
                                />
                        })}
                    </div>
                    <div className="cartFull__footer">
                        <span>Subtotal ({totalAmount} {totalAmount > 1? "items" : "item"}): <span className="big-price">${totalPrice.toFixed(2)}</span></span>
                    </div>
                </div>
            </div>
            <Checkout />
        </>
    )
}

export default connect(mapState)(CartFull);
