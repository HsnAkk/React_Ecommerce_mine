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