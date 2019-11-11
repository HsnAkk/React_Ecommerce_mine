import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import Breadcrumbs from '../components/Breadcrumbs';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { ButtonToolbar, Button } from 'react-bootstrap';

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
                                        <h1 className="text-capitalize mb-3">{title}</h1>

                                        <h2 style={{color: 'var(--mainYellow)'}}>€ {price} 
                                        <span> {discountRate ? <span><small style={{fontSize:'1rem', color:'red'}}>(Save {discountRate} %) </small><span style={{textDecoration:'line-through', fontSize:'1.2rem', color:'grey'}}>€ {parseFloat(price*(100+discountRate)/100).toFixed(2)}</span></span>  : null}</span></h2>
                                        
                                        <h6 className="my-3" style={{color:'grey'}}>Tax {tax}</h6>

                                        {delivery[0] ? <h6 className="my-2" style={{color:'grey'}}>Delivery : <span style={{fontSize: '0.9rem', fontFamily: 'var(--subText)'}}> {delivery[1]} to {delivery[2]} {delivery[3]}</span></h6> : null}
                                        
                                        <h6 className="my-2" style={{background:'#D4EDDA', display:'inline-block', padding:'3px 7px', color:'green'}}>✔ In Stock</h6>

                                        <table className="my-4" style={{width: '180px'}}>
                                            <tr>
                                                <td>Brand</td>
                                                <td><img src={brand} alt="brand" width="50px"height="30px"/> </td>
                                            </tr>
                                            <tr>
                                                <td>In Stock</td>
                                                <td style={{color: 'grey',fontSize: '0.9rem', fontFamily: 'var(--subText)'}}>{size.amount[0]} items</td>
                                            </tr>
                                        </table>
                                        <p className="my-4" style={{color: 'grey',fontSize: '0.95rem', fontFamily: 'var(--subText)'}}>{description}</p>
                                        <table className="my-4" style={{width: 'auto'}}>
                                            <tr className="my-5">
                                                <td className="pr-5" >Size</td>
                                                <td>
                                                    <ButtonToolbar>
                                                        { size.size.map(item => (
                                                            <Button className="mx-2 btn-sm text-uppercase" variant="outline-warning">{ item}</Button>
                                                        ))}
                                                    </ButtonToolbar>
                                                </td>
                                            </tr>
                                            <tr className="my-5">
                                                <td className="pt-2 pr-5">Color</td>
                                                <td>
                                                    { color.map(item => (
                                                        <ColorDiv className="pt-2" style={{background: item }}></ColorDiv>
                                                    ))} 
                                                </td>
                                            </tr>
                                        </table>
                                        <hr/>
                                        <div>
                                            
                                        </div>
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

const ColorDiv = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid transparent;
    border-radius: 50%;
    display: inline-block;
    margin-top: 20px;
    margin-right: 10px;

    &: hover {
        opacity: 0.6;
    }
   
`;

export default Details;