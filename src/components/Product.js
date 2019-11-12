import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

// import PropTypes from 'prop-types';



class Product extends Component {

    state = {
        mouseOver: false
    }

    onMouseHandler = () => {
        this.setState({
            mouseOver: !this.state.mouseOver
        })
    }

    
    render() {
        const { id, title, price, img, discountRate, newItem } = this.props.product;
        console.log(this.props.product);
        return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
                <ProductConsumer>
                    {(value) => (
                                <AnimationDiv onClick={ () => value.handleDetail(id)}>
                                    <Link to='/details'>
                                        <img className="img-fluid" src = {this.state.mouseOver ? img[1] : img[0]} alt="product" onMouseOver= {this.onMouseHandler} onMouseLeave= {this.onMouseHandler} width="100%"/>
                                    </Link>
                                    { newItem ? <div className="newItem">new</div> : null }
                                    { discountRate ? <div className="discountItem">{discountRate} % </div> : null }
                                </AnimationDiv>
                                )
                    }
                </ProductConsumer>

                <div>
                    <h6 className="px-2 pt-4 text-capitalize">{ title }</h6>

                    {discountRate ? <p className="px-2"><strong>$ {price}  </strong><span style={{textDecoration:'line-through', fontSize:'0.9rem', color:'grey'}}>{parseFloat(price*(100+discountRate)/100).toFixed(2)}</span></p> : <p className="px-2"><span style={{fontSize:'0.9rem', color:'grey'}}>From  </span><strong>$ {price}</strong></p>}
                </div>
                
                
        
                


                {/* <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={ () => value.handleDetail(id)}>
                                <Link to='/details'>
                                    <img src={img} alt="product" className='card-img-top' />
                                </Link>
                                <button className="cart-btn" 
                                        disabled={ inCart ? true : false } 
                                        onClick={ () => {   value.addToCart(id);
                                                            value.openModal(id);
                                                        }
                                                } 
                                >
                                { inCart ? (<p className="text-capitalize mb-0" disabled >in cart</p>) :  (<i className="fas fa-cart-plus"/>)}
                                </button>
                            </div>
                        )}
                        
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{price}</h5>
                    </div>
                </div> */}
            </div>
           
        );
    }
}

// Product.propTypes = {
//     product: PropTypes.shape({
//                                 id:PropTypes.number,
//                                 img:PropTypes.string,
//                                 title:PropTypes.string,
//                                 price:PropTypes.number,
//                                 inCart:PropTypes.bool

//     }).isRequired
// }

const Animation = keyframes`${pulse}`;
 
const AnimationDiv = styled.div`
    position: relative;
    &:hover {
        animation: 1.5s ${Animation};
        cursor: pointer;
        box-Shadow: 1px 1px 2px var(--mainYellow), -1px -1px 2px var(--mainYellow);
    }
    .newItem {
        position: absolute;
        top: 20px;
        left: 15px;
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
        left: 65px;
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding: 1px 5px;
        color: red;
        font-size: 12px;
    }
`;


export default Product;