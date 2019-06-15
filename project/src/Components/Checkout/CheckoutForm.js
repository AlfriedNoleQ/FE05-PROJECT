import React, {Component} from 'react';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
        
            checkout: {
                fname: "",
                lname: "",
                email: "",
                address: "",
                phone: ""
            }
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        // this.addOrder = this.addOrder.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    handleFieldChange = event => {
        const { value, email } = event.target;

        this.setState({
            ...this.state,
            checkout: {
            ...this.state.checkout,
            [email]: value
            }
        });
    };

    // onSubmit(e) {
    //     e.preventDefault();

    //     if (!this.isFormValid()) {
    //         this.setState({ error: "All fields are required." });
    //         return;
    // };

    isFormValid() {
        return this.state.fname !== "" && this.state.lname !== ""
        && this.state.email !== "" && this.state.address !== "" && this.state.phone !== "" ;
    };

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    };

    render() {
        return(
            <React.Fragment>
                <form method="post">
                    <div className="container">
                        <h3>Please Fill Out The Form Below: </h3>
                        <div className="row mt-3 border">
                            <div className="col-md-6 mt-3">
                                <label for="First Name">First Name: </label>
                                <input 
                                onChange={this.handleFieldChange}
                                value={this.state.fname}
                                className="form-control" 
                                placeholder="First Name"
                                name="fname" type="text" 
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label for="Last Name">Last Name: </label>
                                <input 
                                onChange={this.handleFieldChange}
                                value={this.state.lname}
                                className="form-control" 
                                placeholder="Last Name"
                                name="lname" type="text" 
                                />
                            </div>
                            <div className="col-md-12">
                                <label for="Email">Email: </label>
                                <input 
                                onChange={this.handleFieldChange}
                                value={this.state.email}
                                className="form-control" 
                                placeholder="Email"
                                name="email" type="text" />
                            </div>
                            <div className="col-md-12">
                                <label for="Phone">Phone Number: </label>
                                <input 
                                onChange={this.handleFieldChange}
                                value={this.state.phone}
                                className="form-control" 
                                placeholder="Phone Number"
                                name="phone" type="text" />
                            </div>
                            <div className="col-md-12">
                                <label for="Address">Address: </label>
                                <input 
                                onChange={this.handleFieldChange}
                                value={this.state.address}
                                className="form-control" 
                                placeholder="Address"
                                name="address" type="text" />
                            </div>

                            {this.renderError()}

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
                </form>
            </React.Fragment>
        );
    }
}

export default CheckoutForm;