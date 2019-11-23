import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import { ProductConsumer } from '../context';


class ModalWarning extends Component {
    render() {
        return (  
            <ProductConsumer>
                { value => {
                    const { modalOpen, closeModal } = value;   
                     
                        if (modalOpen) {
                            return (
                                <ModalContainer>
                                    <Alert variant="danger" className="p-3 border border-danger shadow-lg">
                                        <p className="mb-3 text-danger"> 
                                            This product has already added to cart! 
                                        </p>
                                        <Button variant="outline-danger" 
                                                onClick= { () => closeModal()}
                                                className="m-1 px-3 "
                                        >Close</Button>
                                    </Alert> 
                                </ModalContainer>         
                            )
                        } 
                        return null;
                }}
            </ProductConsumer>   
        )
    }
}

const Animation = keyframes`${fadeInDown}`;

const ModalContainer = styled.div`
    animation: 1.5s ${Animation};
    position: fixed
    top: 100px;
    left: 45%;
    text-align: right;
    padding: 5px;
    border: 3px solid red;
`;

export default ModalWarning;