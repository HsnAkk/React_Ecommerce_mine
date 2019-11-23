import React, { Component } from 'react';
import { MdFormatAlignLeft } from 'react-icons/md';
import { MdPersonOutline } from 'react-icons/md';
import { FaRegHeart} from 'react-icons/fa';
import {FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import LoginMenu from './LoginMenu';
import { ProductConsumer } from '../context';


 class NavbarMenu extends Component {
    
    state= {
        login: false
    }
   
    
   loginHandle = () => (
       this.setState({
           login : !this.state.login
       })
   )


    render() {

        return (
            <ProductConsumer>
                { value => {
                    const { cart } = value;

                    return (
                        <>
                            <NavWrapper className="navbar navbar-expand-md">
                                <MdFormatAlignLeft className="mr-3" style={{fontSize: '20px', cursor: 'pointer'}} />

                                <ul className="navbar-nav">
                                    <li className="nav-item mx-2">
                                        <Link to="/" className='nav-link'>home</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link to="/shop" className='nav-link'>shopping</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link to="/about" className='nav-link'>About</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link to="/blog" className='nav-link'>Blog</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link to="/contact" className='nav-link'>contact</Link>
                                    </li>
                                </ul>

                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item mx-2">
                                        <MdPersonOutline className='nav-right mx-3' onClick={this.loginHandle} /> 
                                        <FaRegHeart className='nav-right ml-3'/>
                                        <Badge className="rounded-circle" variant="warning" style={{transform: "translate(-4px, -10px)"}} >0</Badge>
                                        <Link to="/cart">
                                            <FiShoppingCart className='nav-right ml-3'/>
                                            <Badge className="rounded-circle" variant="warning" style={{transform: "translate(-4px, -10px)"}} >{cart.length}</Badge>
                                        </Link>
                                    </li>
                                </ul>
                            </NavWrapper>
                            
                            { this.state.login ? <LoginMenu  /> : null}
                        </>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainWhite);
    border-bottom: 1px solid var(--mainYellow);
    
    
    .nav-link {
        color: var(--mainBlack) !important;
        font-size: 1.2rem;
        text-transform: uppercase;
        transition: all 0.3s linear;
        padding: 10px 0;
    }
    .nav-link:hover {
        color: var(--mainYellow) !important;
        transform: scale(1.2); 
        background: #f5f5f5   
    }
    .nav-right {
        color: var(--mainBlack) !important;
        font-size: 1.25rem;
        cursor: pointer;
        transition: all 0.3s linear;
    }
    .nav-right:hover {
        color: var(--mainYellow) !important;
        transform: scale(1.3)
    }
`;



export default NavbarMenu;