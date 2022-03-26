import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import CartInfo from '../CartInfo/CartInfo';
const Cart = (props) => {
    const { cart } = props;
    const [item, setItem] = useState([]);
    const [filterItem, setFilterItem] = useState([]);

    useEffect(() => {
        const items = cart;
        if (item.length === 4) {
            alert('You are selected too much product');
        } else {
            setItem(items);
        }
        
    }, [cart]);
    
    // remove Item 
    const removeItem = (productToRemove) => {
        setItem(
            item.filter((product) => product !== productToRemove)
        );
    }

    // clear all selected data;
    const clearCart = () => {
        let newArray = [];
        setItem(newArray);
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
            {
                item.map(product => {
                    return (
                        <div className='cart-info'>
                            <img src={product.img} alt="" />
                            <p>{product.name}</p>
                            
                            <button className='trash' onClick={()=> removeItem(product)}>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                        </div>
                    )
                })
            }
            <div className="btn">
                <button onClick={filterForMe}  className='filter-btn'>Filter for Me</button>
                <button onClick={clearCart}  className='choose-btn'>Choose Again</button>
            </div>
        </div>
    );
};
export default Cart;