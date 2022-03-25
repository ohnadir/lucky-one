import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { name, id, img, price } = props.product;
    console.log(name)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;