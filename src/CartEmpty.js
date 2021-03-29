import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartEmpty.css';

const mapState = (state) => {
    return {
        user: state.user
    }
}

function CartEmpty({ user }) {
    return (
        <div className="cart__empty">
            <div className="cart__emptyContainer">
                <img 
                    className="cart__emptyImage"
                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="cartEmpty" />
                <div className="cart__emptyInfo">
                    {
                        user && <h2>Hello, <span style={{color: "#febd69"}}>{user.email}</span></h2>
                    }
                    <h3>Your Amazon Cart is empty</h3>
                    {
                        !user && <div className="cart__emptyInfoBtn">
                            <Link to='/signin'>
                                <button className="primary-btn amazon-btn">Sign in to your account</button>
                            </Link>
                            <Link to='/createaccount'>
                                <button className="second-btn amazon-btn">Sign up now</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(mapState) (CartEmpty);