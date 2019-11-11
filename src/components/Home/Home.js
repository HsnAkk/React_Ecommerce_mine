import React, { Component } from 'react';
import CarouselShow from './Carousel';
import Title from '../Title';
import FeaturedProducts from './FeaturedProducts';



class Home extends Component {
    render() {
        return (
            <>
              <CarouselShow /> 
              <Title title="featured" />
              <FeaturedProducts />

            </>
        )
    }
}

export default Home;