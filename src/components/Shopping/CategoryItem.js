import React, { Component } from 'react';
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context';
import Breadcrumbs from '../Breadcrumbs';



class ProductList extends Component {
    
    render() {
       
        let pathName = window.location.pathname.split('/');
        let index = pathName.length;
        let path = pathName[index-1];
        let title = path + " products";


        return (
            <div className="container-fluid">
                <Breadcrumbs />
                <Title title={title} />
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
        )
    }
}

export default ProductList;