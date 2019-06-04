import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';
import '../../styles/Cart.css';

class Cart extends Component {
    render() {
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <div className="container" style={{paddingTop: '2rem'}}>
                                    <div className="card shopping-cart">
                                        <div className="card-header bg-dark text-light">
                                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                                            Your Cart
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <CartColumns />
                                        <CartList value={value} />
                                    </div>
                                    <div className="card-footer">
                                        <div className="pull-right" style={{margin: '10px'}}>
                                            <div className="pull-right" style={{margin: '5px'}}>
                                                <CartTotals value={value} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

export default Cart;