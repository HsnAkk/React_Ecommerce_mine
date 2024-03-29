import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';



class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    { value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <div className="w-75 mx-auto">
                                    <Title title="your cart" subtitle="SHOP, in the name of love..." />
                                    <CartColumns />
                                    <CartList value= {value} />
                                    <CartTotals value= {value} history= {this.props.history}/>
                                </div>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

export default Cart;