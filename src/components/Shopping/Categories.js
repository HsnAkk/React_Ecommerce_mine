import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { ProductConsumer } from '../../context';


class Categories extends Component {

    render() {
        const categoryItems = categories.map( (item, index) => {
            let pathName = "/shop/"+item[1];
            
            return (

                <ProductConsumer key={index}>
                    { value => {
                        const { selectedCategory }  = value;
            
                        return (

                            <div className=" col-12 col-md-6 col-lg-4 col-xl-3 my-3">
                                <Link to={pathName}>
                                    <AnimationDiv>
                                        <img src={item[2].img} className="img-fluid" alt="category" style={{height: '300px'}} onClick={() => selectedCategory(item[1])} />
                                    </AnimationDiv>
                                </Link>
                                <h5 className="text-uppercase mt-3 p-2">{item[1]}</h5>
                                <p className="p-2">{item[2].title}</p>
                            </div>
                        )
                    }}
                </ProductConsumer>
            );
        });

        return (
            <div className="container-fluid"> 
                <div className="row justify-content-center">
                    { categoryItems }
                </div>
            </div>
        )
    }
}

const Animation = keyframes`${pulse}`;
 
const AnimationDiv = styled.div`
    &:hover {
        animation: 1.5s ${Animation};
        cursor: pointer;
        box-Shadow: 1px 1px 5px var(--mainYellow), -1px -1px 5px var(--mainYellow);
    }
`;

export default Categories;