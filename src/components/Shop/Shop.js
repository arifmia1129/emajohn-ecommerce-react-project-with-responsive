import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    const [products, setProducs] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducs(data));
    }, []);

    const [cart, setCart] = useState([]);

    const addToCart = (selectedProduct) => {
        console.log(selectedProduct);
    }
    return (
        <div className='row shop-container my-3 mx-auto'>
            <div className='col-md-3 summary-container'>
                <Cart></Cart>
            </div>
            <div className='col-md-9 products-container'>
                <div className='row'>
                    {
                        products.map(product => <Product key={product.id} addToCart={addToCart} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;