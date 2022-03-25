import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCar = (selectedProduct) => {
        let newCart = [];
        newCart = [...product, selectedProduct]
        setProduct(newCart);
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
                <Cart product={product}></Cart>
            </div>
        </div>
    );
};

export default Products;