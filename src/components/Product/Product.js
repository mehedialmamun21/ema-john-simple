import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ handleAddToCart, product }) => {

    // const { handleAddToCart, product } = props;
    const { img, name, seller, price, ratings } = product;

    return (
        <div className='product'>

            <img src={img} alt=""></img>
            <div className='product-detail'>
                <h2>{name}</h2>
                <p>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-crt'>
                <p className='btn-txt'><small>Add to Cart</small></p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;

/*

*/