import React, { Component } from 'react';
import Product from '../Product';
import { ProductConsumer } from '../../context';


class FeaturedProducts extends Component {
    
    render() {

        return (
            <>
                <div className="py-3">
                    <div style={{width: '90%', margin: ' 0 auto'}}>
                        <div className="row">
                            <ProductConsumer>
                                { value => {
                                    return value.featuredProducts.map( product => {
                                        return <Product key={product.id} product={product} />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FeaturedProducts;