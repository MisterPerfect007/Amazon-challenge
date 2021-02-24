import React from 'react';
import './Product.css';
import { connect } from 'react-redux';

const mapDispatch = (dispatch) =>{
    return {
        addProduct: (action) => dispatch(action)
    }
}
// {title, price, rating, image}
function Product(props) {
    const {id, title, price, rating, image} = props;
    
    const handleClick = () => {
        const action = {
            type: 'ADD_PRODUCT',
            payload: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
                amount: 1
            }
        }
        props.addProduct(action);
    }
    let rate = [];
    for(let i = 0; i<rating; i++) rate.push(<p key={i}>⭐</p>)
    return (
        <div className="product">
            <p className="product__title">
            {title}
            </p>
            <p className="product__price">
                $<span>{price}</span>
            </p>
            {/* ⭐⭐⭐⭐⭐ */}
            <span className="product__rating">
                {rate}
            </span>
            <img 
                className="product__image"
                src={image}
                alt="product"
            />
            <button className="product__btn" onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default connect(null, mapDispatch)(Product);
