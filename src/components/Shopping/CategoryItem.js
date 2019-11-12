import React, { Component } from 'react';
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context';
import Breadcrumbs from '../Breadcrumbs';
import FilterBy from '../FilterBy';


class ProductList extends Component {
    
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
                            <FilterBy />
                            </div>
                        </div>
                        <div className="col-12 col-lg-10">
                            <div className="m-3">
                                <div className="row">
                                    <ProductConsumer>
                                        { value => {
                                            return value.products.filter(product => product.category === path).map( product => {
                                                return <Product key={product.id} product={product} />
                                            });
                                        }}
                                    </ProductConsumer>
                                </div>
                            </div>
                        </div>
                    </div>





                    
                </div>
            </div>
        )
    }
}

export default ProductList;