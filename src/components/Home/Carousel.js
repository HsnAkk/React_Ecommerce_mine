import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';
import { carouselData } from '../../data';


class CarouselShow extends React.Component {
    state = {
        index: 0,
        direction: null
    }
    
    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    };

    
    render () {
        const carouselItems = carouselData.map( (item) => {
            return (
                <Carousel.Item style={{transition: 'transform 2s ease, opacity 1.5s ease-out' }} key={item.id}>
                    <img
                        className="d-block w-100"
                        src={item.src}
                        alt="carousel item"
                        height= '600px'
                    />
             
                    <Carousel.Caption style={textStyle}>
                        <AnimationDiv>
                            <h1>{ item.label}</h1>
                            <p>{item.subLabel}</p>
                        </AnimationDiv>
                    </Carousel.Caption>
               
                </Carousel.Item>
            );
        })
        return (
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} className="carousel-fade"  interval='3000' >
                {carouselItems}
            </Carousel>
        );
    }
  }

  const Animation = keyframes`${bounceInLeft}`;
 
  const AnimationDiv = styled.div`
    animation: 1.5s ${Animation};
  `;
  
  
  const textStyle = {
      position: 'absolute',
      bottom: '10%',
      left: '10%',
      zIndex: '100',
      textAlign: 'left',
      textShadow: '3px 3px 5px black',
      fontSize: '25px'
  }
  
  export default CarouselShow; 
