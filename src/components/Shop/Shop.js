import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    const [products, setProducs] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducs(data));
    }, [])
    return (
        <div className='row shop-container my-3 mx-auto'>
            <div className='col-md-3 summary-container'>

            </div>
            <div className='col-md-9 products-container'>
                <div className='row'>
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;