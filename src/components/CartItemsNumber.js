import React from 'react';
import {FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ProductConsumer } from '../context';


const CartItemsNumber = () => {
    return (
        <ProductConsumer>
            { value => {
                const { cart } = value;

                return (
                    <DivNumber>
                        <OverlayTrigger
                            key="top"
                            placement="top"
                            delay= "300"
                            overlay={
                                <Tooltip className="mb-3">
                                Go to <strong>Cart</strong>.
                                </Tooltip>
                            }
                        >
                            <Link to="/cart" >
                                <FiShoppingCart className="cartIcon"/>
                                <Badge className="rounded-circle badgeIcon" variant="warning" style={{transform: "translate(-4px, -10px)"}} >{cart.length}</Badge>
                            </Link>
                        </OverlayTrigger>
                    </DivNumber>
                )
            }}
        </ProductConsumer>
    )
}
    
const DivNumber = styled.div`
    background: var(--mainWhite);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 30px;
    bottom: 50px;
    border: 3px solid var(--mainYellow);
    width: 65px;
    height: 60px;
    border-radius: 50%;
    font-size: 20px;

    .cartIcon {
        color: black;
    }
    &:hover {
        background: var(--mainYellow);
    }
    &:hover .cartIcon {
        color: white;
    }
    &:hover .badgeIcon {
        color: white;
        background: red;
        
    }
`;

export default CartItemsNumber;