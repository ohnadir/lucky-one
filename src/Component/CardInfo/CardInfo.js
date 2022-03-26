import React from 'react';
import './CardInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const CardInfo = (props) => {
    const { name, img } = props.product;
    const { removeItem } = props;
    return (
        <div className='cart-info'>
            <img src={img} alt="" />
            <p>{name}</p>
                            
            <button className='trash' onClick={()=> removeItem(props.product)}>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default CardInfo;