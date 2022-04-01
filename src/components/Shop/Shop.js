import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // console.log(products);

    const handleAddToCart = (product) => {
        // console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

/* 
import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'asus wat', img: "images/lap1.jpg", price: 75000 },
        { id: 2, name: 'hp fet', img: "images/lap2.jpg", price: 70000 },
        { id: 3, name: 'del wex', img: "images/lap3.jpg", price: 68000 },
        { id: 4, name: 'asus xoo', img: "images/lap4.jpg", price: 65000 },
        { id: 5, name: 'lenovo wisten', img: "images/lap5.jpg", price: 60000 },
        { id: 6, name: 'hp pavilion', img: "images/lap6.jpg", price: 55000 },
        { id: 7, name: 'apple mac', img: "images/lap7.jpg", price: 50000 },
        { id: 8, name: 'hp autt', img: "images/lap8.jpg", price: 45000 },
        { id: 9, name: 'asus zenbook', img: "images/lap9.jpg", price: 45000 }
    ]
    const handleAddToCart = (product) => {
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>

            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>selected items : {cart.length}</p>
            </div>

        </div>
    );
};

export default Shop;
*/