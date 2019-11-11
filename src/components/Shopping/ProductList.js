import React, { Component } from 'react';
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context';


class ProductList extends Component {
    
    render() {

        return (
            <div className="container-fluid">
                <Title title="products" />
                <div className="row">
                    <ProductConsumer>
                        { value => {
                            return value.products.map( product => {
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