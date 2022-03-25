import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCar = (selectedProduct) => {
        let newCart = [];
        newCart = [...cart, selectedProduct]
        setCart(newCart);
    }
    return (
        <div className='products'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCar={handleAddToCar}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                {/* {
                    cart.map(product=> <Cart product={product} key={product.id}></Cart>)
                } */}
            </div>
        </div>
    );
};

export default Products;