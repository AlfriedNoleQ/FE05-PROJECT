import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import emptycart from '../../images/emptycart.gif';

class EmptyCart extends Component {
    render() {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <img src={emptycart} alt="emptycart" height="300" width="550" />
                        <h5>Your cart is currently empty</h5>
                        <Link to="/products">
                            <button className="btn btn-primary text-uppercase mb-3 px-5" 
                            type="button">
                                continue shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmptyCart;