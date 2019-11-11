import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';


class Categories extends Component {

    render() {
        const categoryItems = categories.map( item => {
            let pathName = "/shop/"+item[1];
            return (
                <div key={item[0]} className=" col-12 col-md-6 col-lg-4 col-xl-3 my-3">
                    <Link to={pathName}>
                        <AnimationDiv>
                            <img src={item[2].img} className="img-fluid" alt="category" style={{height: '300px'}} />
                        </AnimationDiv>
                    </Link>
                    <h5 className="text-uppercase mt-3 p-2">{item[1]}</h5>
                    <p className="p-2">{item[2].title}</p>
                </div>
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