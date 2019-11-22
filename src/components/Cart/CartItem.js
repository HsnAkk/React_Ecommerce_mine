import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';


const CartItem = ( {item, value} ) => {
    const { id, title, img, price, total, count } =item;
    const { increment, decrement, removeItem } = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img[0]} style= {{width:'5rem', height:'5rem'}} className="img-fliuid border border-warning" alt="product"/>
            </div>    
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {title}
            </div>   
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price : </span>
                ${price}
            </div> 
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-warning mx-1" onClick={ () => decrement(id) }>-</span>
                    <span className="btn btn-outline-secondary mx-1">{count}</span>
                    <span className="btn btn-warning mx-1" onClick={ () => increment(id) }>+</span>
                </div>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
                <DivTrash onClick={ () => removeItem(id)}>
                    <FaTrashAlt />
                </DivTrash>
            </div> 
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total.toFixed(2)}</strong>
            </div> 
        </div>
    );
}

const DivTrash = styled.div`
transition: all 0.5s linear;
font-size: 20px;

&:hover {
    transform: scale(1.3);
    color: var(--mainYellow);
    cursor: pointer;
}

`;

export default CartItem;