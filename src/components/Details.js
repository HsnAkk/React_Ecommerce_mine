import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import Breadcrumbs from '../components/Breadcrumbs';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

class Details extends Component {

    state = {
        mouseOver: false
    }

    onMouseHandler = () => {
        this.setState({
            mouseOver: !this.state.mouseOver
        })
    }


    render() {
        return (
            
            <ProductConsumer>
                { value => {
                    const { id, title, brand, price, size, color, tax, stock, delivery, img, description, details, newItem, discountRate } = value.detailProduct;
                    return (
                        <>
                            <Breadcrumbs />  
                            <div className="container-fluid">
                                <div className="row">
                                    <AnimationDiv className="col-12 col-lg-5 mt-5">
                                        <img className="img-fluid" src = {img[0]} alt="product" onMouseOver= {this.onMouseHandler} onMouseLeave= {this.onMouseHandler}/>
                                        { newItem ? <div className="newItem">new</div> : null }
                                        { discountRate ? <div className="discountItem">{discountRate} % </div> : null }
                                    </AnimationDiv>
                                    <div className="col-12 col-lg-6 mt-5 ml-3">
                                        <h1 className="text-capitalize">{title}</h1>
                                        <h3 style={{color: 'var(--mainYellow)'}}>€ {price} 
                                        <span> {discountRate ? <span><small className="text-danger">(Save {discountRate} %) </small><span style={{textDecoration:'line-through', fontSize:'1.2rem', color:'grey'}}>€ {parseFloat(price*(100+discountRate)/100).toFixed(2)}</span></span>  : null}</span></h3>
                                        <h6 style={{color:'grey'}}>Tax {tax}</h6>
                                        {delivery[0] ? <h6 style={{color:'grey'}}>Delivery: {delivery[1]} to {delivery[2]} {delivery[3]}</h6> : null}
                                        <h6 style={{background:'#D4EDDA', display:'inline-block', padding:'3px 7px', color:'green'}}>In Stock</h6>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </ProductConsumer>
        )
    }
}

const Animation = keyframes`${pulse}`;
 
const AnimationDiv = styled.div`
    position: relative;
    &:hover {
        ${'' /* animation: 1.5s ${Animation}; */}
        cursor: pointer;
        ${'' /* box-Shadow: 1px 1px 2px var(--mainYellow), -1px -1px 2px var(--mainYellow); */}
    }
    .newItem {
        position: absolute;
        top: 20px;
        left: 25px;
        border-top: 1px solid #77c66d;
        border-bottom: 1px solid #77c66d;
        padding: 1px 5px;
        color: #77c66d;
        text-transform: uppercase;
        font-size: 12px;
    }
    .discountItem {
        position: absolute;
        top: 20px;
        left: 75px;
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding: 1px 5px;
        color: red;
        font-size: 12px;
    }
`;

export default Details;