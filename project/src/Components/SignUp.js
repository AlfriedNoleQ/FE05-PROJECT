import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class SignUp extends Component {
	render() {
		return(
			<div className="container-fluid text-center">
			<h3>New? Register Now!</h3>
				<div className="container">	
					<div className="container">
						<form>
							<div class="form-group">
							   <label for="exampleInputEmail1">Email address</label>
							   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." />
							   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div class="form-group">
							   <label for="exampleInputPassword1">Password</label>
							   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password..." />
							</div>
							<div class="form-group">
							   <label for="exampleInputPassword1">Address</label>
							   <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address..." />
							</div>
							<div class="form-group">
							   <label for="exampleInputPassword1">Phone</label>
							   <input type="number" class="form-control" id="exampleInputPassword1" placeholder="phone..." />
							</div>
							<div class="form-group form-check">
							   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
							   <label class="form-check-label" for="exampleCheck1">Creat account</label>
							</div>
							<button type="submit" class="btn btn-outline-success">Submit</button>
							<button type="submit" class="btn btn-primary">Reset</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;