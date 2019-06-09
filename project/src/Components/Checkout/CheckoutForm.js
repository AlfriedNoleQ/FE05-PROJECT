import React, {Component} from 'react';

class CheckoutForm extends Component {
    render() {
        return(
            <div className="container">
                <h3>Please Fill Out The Form Below: </h3>
                <div className="row mt-3 border">
                    <div className="col-md-6 mt-3">
                        <label for="First Name">First Name: </label>
                        <input 
                        className="form-control" 
                        placeholder="First Name"
                        name="fname" type="text" 
                        />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label for="Last Name">Last Name: </label>
                        <input 
                        className="form-control" 
                        placeholder="Last Name"
                        name="lname" type="text" 
                        />
                    </div>
                    <div className="col-md-12">
                        <label for="Email">Email: </label>
                        <input 
                        className="form-control" 
                        placeholder="Email"
                        name="email" type="text" />
                    </div>
                    <div className="col-md-12">
                        <label for="Phone">Phone Number: </label>
                        <input 
                        className="form-control" 
                        placeholder="Phone Number"
                        name="phone" type="text" />
                    </div>
                    <div className="col-md-12">
                        <label for="Address">Address: </label>
                        <input 
                        className="form-control" 
                        placeholder="Address"
                        name="address" type="text" />
                    </div>
                    <div className="col-xs-12" style={{margin: '20px'}}>
                        <input type="checkbox" id="CustomCheckbox" label="Agree to our terms and policies" style={{margin: '10px'}} />
                         Agree to our terms and policies
                    </div>
                </div>
                <div className="row">
                <div className="col-md-9 mt-2">
                    <p className="text-muted">Please check your information carefully</p>
                </div>
                <div className="col-md-3 mt-2">
                    <button className="btn btn-success pull-right" type="submit"><i class="fas fa-check"></i> Submit</button>
                </div>
                </div>
            </div>
        );
    }
}

export default CheckoutForm;