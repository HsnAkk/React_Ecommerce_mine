import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
//import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Title from '../Title';
import Categories from './Categories';


class Shop extends Component {
    render() {
        return (
            <>
                <Breadcrumbs />                
                <Title title="categories" />
                <Categories />
                <ProductList />
                
            </>
        )
    }
}


export default Shop;