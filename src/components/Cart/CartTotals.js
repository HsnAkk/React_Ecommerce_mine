import React from 'react';
import { Link } from 'react-router-dom';
// import PayPalButton from './PayPalButton';



const CartTotals = ({value, history}) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5 py-2"
                                    type="button"
                                    onClick={ () => clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <table className="ml-auto">
                            <tr>
                                <td><h5><span className="mr-3">subtotal : </span></h5></td>
                                <td><h5><strong>$ {cartSubTotal.toFixed(2)}</strong></h5></td>
                            </tr>
                            <tr>
                                <td><h5><span className="mr-3">tax : </span></h5></td>
                                <td><h5><strong>$ {cartTax.toFixed(2)}</strong></h5></td>
                            </tr>
                            <tr>
                                <td><h5><span className="mr-3">total : </span></h5></td>
                                <td><h5><strong>$ {cartTotal.toFixed(2)}</strong></h5></td>

                            </tr>
                        </table>

                        {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history} /> */}
                    </div>
                </div>  
            </div>  
        </>
    )
}



export default CartTotals