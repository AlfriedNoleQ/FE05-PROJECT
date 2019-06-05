import React, {Component} from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';
import {ProductConsumer} from '../../context';

class Checkout extends Component {
    render() {
        return(
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    return(
                        <div className="container mt-3">
                            <h2 className="text-center text-uppercase mb-4">Payment Information</h2>
                            <div className="row"> 
                                <div className="col-md-7">
                                    <CheckoutForm />
                                </div>
                                <div className="col-md-5">
                                    <CheckoutSummary value={value}/>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Checkout;