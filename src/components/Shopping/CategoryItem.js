import React, { Component } from 'react';
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context';
import Breadcrumbs from '../Breadcrumbs';
import FilterByCategory from '../FilterByCategory';
import CartItemsNumber from '../CartItemsNumber';


class CategoryItem extends Component {
    
    render() {
       
        let pathName = window.location.pathname.split('/');
        let index = pathName.length;
        let path = pathName[index-1];
        let title = path + " collection";


        return (
            <div>
                <Breadcrumbs />
                <div style={{width: '90%', margin: ' 0 auto'}}>
                    <div className="row">
                        <img src={'/img/categories/'+path+'banner.jpg'} className="img-fluid my-3" alt="collection's banner" style={{width:'100%', height:"250px"}}/>
                    </div>
                    
                    <Title title={title} subtitle="Browse our website for the hottest items in the marketplace now" />
                    
                    <div className="row">
                        <div className="col-12 col-lg-2">
                            <div className="m-2">
                            <h2 className="pl-2">Filter By</h2>
                            <hr/>
                            <FilterByCategory />
                            </div>
                        </div>
                        <div className="col-12 col-lg-10">
                            <div className="m-3">
                                <div className="row">
                                    <ProductConsumer>
                                        { value => {
                                            const { sortedProductsCategoryItems } = value;
                                            
                                            if(sortedProductsCategoryItems.length === 0) {
                                                return (
                                                    <div className="mx-auto p-5 text-danger border border-danger">
                                                        <h3>unfortunately no products matched your search parameters</h3>
                                                    </div>
                                                )
                                            }
                                            return sortedProductsCategoryItems.map( product => {
                                                return <Product key={product.id} product={product} />
                                            });
                                        }}
                                    </ProductConsumer>
                                    <CartItemsNumber />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryItem;