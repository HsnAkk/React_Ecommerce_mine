import React, { Component } from 'react';
import Product from '../Product';
import { ProductConsumer } from '../../context';


class ProductList extends Component {
    
    render() {

        return (
            <div>
                <div className="row">
                    <ProductConsumer>
                        { value => {
                            if(value.sortedProducts.length === 0) {
                                return (
                                    <div className="mx-auto p-5 text-danger border border-danger">
                                        <h3>unfortunately no products matched your search parameters</h3>
                                    </div>
                                )
                            }
                            return value.sortedProducts.map( product => {
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