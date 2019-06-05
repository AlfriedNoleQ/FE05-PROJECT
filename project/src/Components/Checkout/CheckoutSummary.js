import React, {Component} from 'react';
import {formatMoney} from "../../format/priceFormatter";
import CheckoutItems from './CheckoutItems';

function CheckoutSummary ({value}) {
    const {cartTotal, cart} = value;
    return(
        <div className="container mt-5">
            <ul class="list-group">
                <li class="list-group-item text-uppercase">Order Summary</li>
                <li class="list-group-item">
                    {cart.map(item => {
                        return <CheckoutItems key={item.id} item={item} value={value} />
                    })}
                </li>
                <li class="list-group-item">
                    <div className="row">
                        <div className="col-md-8"><p>Total: </p></div>
                        <div className="col-md-4">
                            <strong> <font color="red">{formatMoney(cartTotal)}</font> Đ</strong>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CheckoutSummary;