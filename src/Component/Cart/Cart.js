import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CardInfo from '../CardInfo/CardInfo';
const Cart = (props) => {
    const { cart } = props;
    const [item, setItem] = useState([]);
    const [filterItem, setFilterItem] = useState([]);

    useEffect(() => {
        const items = cart;
        if (item.length === 4) {
            alert('Oops you already select 4 products');
        } else {
            setItem(items);
        }
    }, [cart]);

    // remove Item 
    const removeItem = (productToRemove) => {
        setItem(
            item.filter((product) => product !== productToRemove)
        );
        item.length = 0;
    }

    // clear all selected data;
    const clearCart = () => {
        let newArray = [];
        setItem(newArray);
        item.length = 0;
    }
    // filter for me 
    const filterForMe = () => {
        if (item.length !== 0) {
            const filter = item[(Math.floor(Math.random() * item.length))];
            setFilterItem(filter);
        }
        
    }
    return (
        
        <div className='cart'>
            <div>
                <h3>Filter Product</h3>
                <div className="filter-product">
                    <img src={filterItem.img} alt="" />
                    <p>{filterItem.name}</p>
                </div>
                
            </div>
            <h5>Selected Products</h5>

            {item.map(product => <CardInfo
                product={product}
                key={product.id}
                removeItem={removeItem}
            ></CardInfo>)}
            
            <div className="btn">
                <button onClick={filterForMe}  className='filter-btn'>Filter for Me</button>
                <button onClick={clearCart}  className='choose-btn'>Choose Again</button>
            </div>
        </div>
    );
};
export default Cart;