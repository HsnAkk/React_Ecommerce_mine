import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import Breadcrumbs from '../components/Breadcrumbs';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { ButtonToolbar, Button, Tabs, Tab } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
//import { IoIosArrowUp } from 'react-icons/io';
//import { IoIosArrowDown } from 'react-icons/io';
import { IoMdGitCompare } from 'react-icons/io';
import { GoCheck } from 'react-icons/go';



class Details extends Component {

    state = {
        mouseOver: false,
        changeImage: ''
    }

    
    changeImage = (e) => {        
        this.setState({ changeImage: e.target.src})
        e.target.classList.add('border-warning');
    }


    render() {
        const uuidv4 = require('uuid/v4');

        return (
            
            <ProductConsumer>
                { value => {
                    const { id, title, brand, price, size, color, tax, stock, delivery, img, description, details, newItem, discountRate } = value.detailProduct;
                    
                    return (
                        < div>
                            <Breadcrumbs />  
                            <div style={{width: '90%', margin: ' 0 auto'}}>
                                <div className="row">
                                    <AnimationDiv className="col-12 col-lg-5 mt-5">
                                        <img className="img-fluid" src = {this.state.changeImage ? this.state.changeImage : img[0]} alt="product" width='100%'/>
                                        { newItem ? <div className="newItem">new</div> : null }
                                        { discountRate ? <div className="discountItem">{discountRate} % </div> : null }
                                        <div className="row justify-content-start">
                                            {img.map(image => (
                                                img.indexOf(image) === 0 ? 
                                                <img key={uuidv4()} src={image} width="105px" height="130px"  alt="product images" className= "ml-3 mr-2 mt-3 border border-warning" onClick={this.changeImage}/> :
                                                <img key={uuidv4()} src={image} width="100px" height="130px"  alt="product images" className="ml-3 mr-2 mt-3 border border-warning" onClick={this.changeImage}/>
                                            ))}
                                        </div>
                                    </AnimationDiv>
                                    <div className="col-12 col-lg-6 mt-5 ml-3">
                                        <h1 className="text-capitalize mb-3">{title}</h1>

                                        <h2 style={{color: 'var(--mainYellow)'}}>€ {price} 
                                        <span> {discountRate ? <span><small style={{fontSize:'1rem', color:'red'}}>(Save {discountRate} %) </small><span style={{textDecoration:'line-through', fontSize:'1.2rem', color:'grey'}}>€ {parseFloat(price*(100+discountRate)/100).toFixed(2)}</span></span>  : null}</span></h2>
                                        
                                        <h6 className="my-3" style={{color:'grey'}}>Tax {tax}</h6>

                                        {delivery[0] ? <h6 className="my-2" style={{color:'grey'}}>Delivery : <span style={{fontSize: '0.9rem', fontFamily: 'var(--subText)'}}> {delivery[1]} to {delivery[2]} {delivery[3]}</span></h6> : null}
                                        
                                        {stock ? <h6 className="my-2" style={{background:'#D4EDDA', display:'inline-block', padding:'5px 7px', color:'green'}}>✔ In Stock</h6> : null}

                                        <table className="my-4" style={{width: '180px'}}>
                                            <tbody>
                                                <tr>
                                                    <td>Brand</td>
                                                    <td><img src={brand} alt="brand" width="50px"height="30px"/> </td>
                                                </tr>
                                                <tr>
                                                    <td>In Stock</td>
                                                    <td style={{color: 'grey',fontSize: '0.9rem', fontFamily: 'var(--subText)'}}>{size.amount[0]} items</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="my-4" style={{color: 'grey',fontSize: '0.95rem', fontFamily: 'var(--subText)'}}>{description}</p>
                                        <table className="my-4" style={{width: 'auto'}}>
                                            <tbody>
                                                <tr className="my-5">
                                                    <td className="pr-5" >Size</td>
                                                    <td>
                                                        <ButtonToolbar>
                                                            { size.size.map(item => (
                                                                <Button key={uuidv4()} className="mx-2 btn-sm text-uppercase" variant="outline-warning">{ item}</Button>
                                                            ))}
                                                        </ButtonToolbar>
                                                    </td>
                                                </tr>
                                                <tr className="my-5">
                                                    <td className="pt-2 pr-5">Color</td>
                                                    <td>
                                                        { color.map(item => (
                                                            <ColorDiv key={uuidv4()} className="pt-2" style={{background: item }}></ColorDiv>
                                                        ))} 
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr/>
                                        <div className="my-4 py-2">
                                            <ButtonSpan title="Add to Cart">add to cart</ButtonSpan>
                                            <ButtonSpan title="Add to Wishlist"><FaRegHeart /></ButtonSpan>
                                            <ButtonSpan title="Add to Compare"><IoMdGitCompare /></ButtonSpan>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-4 px-3">
                                    <Tabs defaultActiveKey="description" style={{fontSize: '25px', paddingBottom:'30px', fontFamily: 'var(--subText)', fontColor: 'red'}}>
                                        <Tab eventKey="description" title="Description">
                                            <div>
                                                <p style={{color: 'grey',fontSize: '0.95rem', fontFamily: 'var(--subText)', paddingTop: '20px'}}>{description}</p>
                                                <ul>
                                                    {details.map(item => ( 
                                                        <li key={uuidv4()} style={{listStyleType: 'none', color: 'grey',fontSize: '0.95rem', fontFamily: 'var(--subText)'}}><GoCheck /> {item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="reviews" title="Reviews">
                                            <p style={{color: 'grey',fontSize: '0.95rem', fontFamily: 'var(--subText)', paddingTop: '20px'}}>{description}</p>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        )
    }
}

//const Animation = keyframes`${pulse}`;
 
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

const ButtonSpan = styled.span`
height: 40px;
padding: 15px;
border: 1px solid grey;
text-transform: uppercase;
margin: 5px;
color: var(--mainYellow);
font-size: 15px;
&:hover {
    color: white;
    background: var(--mainYellow);
    border: none;
    cursor: pointer;
}
`;



export default Details;