import React, { Component } from 'react';
import CarouselShow from './Carousel';
import Title from '../Title';
import FeaturedProducts from './FeaturedProducts';
import CartItemsNumber from '../CartItemsNumber';
import ModalWarning from '../ModalWarning';

class Home extends Component {
    render() {
        return (
            <>
                <CarouselShow /> 
                <Title title="featured products"  subtitle="Browse our website for the hottest items in the marketplace now"/>
                <FeaturedProducts />
                <CartItemsNumber />
                <ModalWarning />
            </>
        )
    }
}

export default Home;