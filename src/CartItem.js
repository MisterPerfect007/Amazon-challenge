import React from 'react';
import { connect } from 'react-redux';
import './CartItem.css';

const mapDispatch = (dispatch) => {
    return {
        addProduct: (action) => dispatch(action),
        decreaseAmount: (action) => dispatch(action),
        deleteProduct: (action) => dispatch(action)
    }
}

function CartItem(props) {
    const {id, title, price, image, amount} = props;
    //To increase the product amount
    const handlePlus = () => {
        const action ={
            type: 'ADD_PRODUCT',
            payload:{
                id: id
            }
        }
        props.addProduct(action)
    }
    //To decrease the product amount(will delete the product if amount === 1)
    const handleMinus = () => {
        const action ={
            type: 'DECREASE_AMOUNT',
            payload:{
                id: id
            }
        }
        props.decreaseAmount(action)
    }
    //To delete the product
    const handleDelete = () => {
        const action ={
            type: 'DELETE_PRODUCT',
            payload:{
                id: id
            }
        }
        props.decreaseAmount(action)
    }
    return (
        <div className="cartItem">
            <img 
                className="cartItem__image"
                src={image}
                alt="" 
            />
            <div className="cartItem__info">
                <h1 className="cartItem__infoTitle">{title}</h1>
                <div className="cart__infoManage">
                    <div className="cart__infoQty">
                        <div className="cart__infoQtyMinus unselectable" onClick={handleMinus}>-</div>
                        <span className="cart__infoQtyAll unselectable" >{amount}</span>
                        <div className="cart__infoQtyPlus unselectable" onClick={handlePlus}>+</div>
                    </div>
                    <div className="cart__infoDelete" onClick={handleDelete}>Delete</div>
                </div>
            </div>
            <span className="big-price cart__price">${price}</span>
        </div>
    )
}

export default connect(null, mapDispatch) (CartItem);