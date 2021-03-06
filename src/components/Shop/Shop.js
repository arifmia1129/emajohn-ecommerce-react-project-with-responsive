import React, { useEffect, useState } from 'react';
import { addDb, getStoredCart, removeDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        let savedCard = [];
        for (const id in storedCart) {
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                addedCart.quantity = storedCart[id];
                savedCard.push(addedCart);
            }
        }
        setCart(savedCard);
    }, [products]);
    const addToCart = (selectedProduct) => {
        const exist = cart.find(product => product.id === selectedProduct.id);
        let totalOrders = [];
        if (!exist) {
            selectedProduct.quantity = 1;
            totalOrders = [...cart, selectedProduct];
        }

        else {
            const rest = cart.filter(product => product.id !== exist.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            totalOrders = [...rest, selectedProduct];

        }
        setCart(totalOrders);
        addDb(selectedProduct.id);


    }

    const clearCart = () => {
        setCart([]);
        removeDb();
    }
    return (
        <div className='row shop-container my-3 mx-auto'>
            <div className='col-md-3 summary-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
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