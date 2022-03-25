import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const { cart } = props;
    // const {name, img} = props.product;
    console.log(cart)

    return (
        <div className='cart'>
            <h3>Selected Products</h3>
            <div className='product-info'>
                {
                    cart.map(product => {
                        return (
                            <div className='cart-info'>
                                <img src={product.img} alt="" />
                                <p>{product.name}</p>
                                <button>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="btn">
                <button className='filter-btn'>Filter for Me</button>
                <button className='choose-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;