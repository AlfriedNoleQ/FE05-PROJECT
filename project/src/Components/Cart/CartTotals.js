import React from 'react';
import {Link} from 'react-router-dom';
import {formatMoney} from "./../../format/priceFormatter";


function CartTotals ({value}) {
    const {cartTotal, clearCart} = value;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/products">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button" onClick={() => clearCart()} >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">total: </span>
                            <strong>{formatMoney(cartTotal)} đ</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartTotals;