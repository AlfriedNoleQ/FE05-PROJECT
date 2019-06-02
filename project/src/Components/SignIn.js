import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class SignIn extends Component {
	render() {
		return(
			<div className="container-fluid text-center">
				<h3 className="padding">Sign In</h3>
				<div className="container padding">
					<div className="row">
						<div className="col">
						</div>
						<form className="col-8">
						  <div class="form-group">
						    <label for="exampleInputEmail1">Email address</label>
						    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
						    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						  </div>
						  <div class="form-group">
						    <label for="exampleInputPassword1">Password</label>
						    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
						  </div>
						  <button type="submit" class="btn btn-primary">Submit</button>
						</form>
						<div className="col">
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default SignIn;