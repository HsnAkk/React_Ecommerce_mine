import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
//import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Title from '../Title';
import Categories from './Categories';
import FilterBy from '../FilterBy';
import CartItemsNumber from '../CartItemsNumber';


class Shop extends Component {
    render() {
        return (
            <>
                <Breadcrumbs /> 
                <div style={{width: '90%', margin: ' 0 auto'}}>
                    <Title title="categories" subtitle="Browse our website for the hottest items in the marketplace now"/>
                    <Categories />

                    <Title title="products" subtitle="Browse our website for the hottest items in the marketplace now"/>

                    <div className="row">
                        <div className="col-12 col-lg-2">
                            <div className="m-2">
                            <h2 className="pl-2">Filter By</h2>
                            <hr/>
                            <FilterBy />
                            </div>
                        </div>
                        <div className="col-12 col-lg-10">
                            <div className="m-3">
                                <ProductList />
                            </div>
                        </div>
                        <CartItemsNumber />
                    </div>
                </div>               
            </>
        )
    }
}


export default Shop;