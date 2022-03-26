import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import CartInfo from '../CartInfo/CartInfo';
const Cart = (props) => {
    const { cart } = props;
    const [item, setItem] = useState([]);
    useEffect(() => {
        const items = cart;
        setItem(items);
    }, [cart]);

    // remove Item 
    const removeItem = (productToRemove) => {
        setItem(
            item.filter((product) => product !== productToRemove)
        );
    }

    // clear all selected data;
    const clearCart = () => {
        let newArray = [ ];
        setItem(newArray);
    }
    return (
        
        <div className='cart'>
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
                <button  className='filter-btn'>Filter for Me</button>
                <button onClick={clearCart}  className='choose-btn'>Choose Again</button>
            </div>
        </div>
    );
};
//onClick={()=> removeItem(props.product)}
export default Cart;