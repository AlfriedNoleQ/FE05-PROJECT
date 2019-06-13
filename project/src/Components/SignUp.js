import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './../styles/SignUp.css';
import Axios from 'axios';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
				email: '',
				username: '',
				password: '',
				address: '',
				phone: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value});
		console.log(this.state);
	}

	onSubmit(e) {
		e.preventDefault()

		Axios.post("http://localhost:3000/users",{
			...this.state
		})
		.then(response => {
			console.log("sdsdsdsd")
			console.log(response.data)
		})
		.catch(err => {
			// console.log(err)
		})

		// Axios.post("http://localhost:3000/users",{
		// 	...this.state.user
		// })
		// .then(response => {
		// 	console.log(response.data);
		// 	this.setState ({
		// 		user: response.data
		// 	});
		// })
		// console.log("resgiter");
	}

		

	render() {
		return(
        	<div className="container-fluid text-center">
			<h3 className="padding">New? Register Now!</h3>
				<div className="container padding">
					<form onSubmit={this.onSubmit}>
					  <div class="form-group row">
					    <label class="col-sm-2 col-form-label">Email: </label>
					    <div class="col-sm-10">
					     	<input type="email" 
							name="email" 
							className="form-control" 
							id="exampleInputEmail1" 
							aria-describedby="emailHelp" 
							placeholder="Enter email..."
							onChange={this.onChange} />
					    </div>
					  </div>
					  <div class="form-group row">
					    <label class="col-sm-2 col-form-label">Username: </label>
					    <div class="col-sm-10">
					     	<input type="text" 
							name="username" 
							className="form-control" 
							id="usn"
							placeholder="User name..."
							onChange={this.onChange} />
					    </div>
					  </div>
					  <div class="form-group row">
					    <label for="inputPassword" class="col-sm-2 col-form-label">Password: </label>
					    <div class="col-sm-10">
					    	<input type="password" 
							name="password" 
							className="form-control" 
							id="exampleInputPassword1" 
							placeholder="Password..." 
							onChange={this.onChange} />
					    </div>
					  </div>
					  <div class="form-group row">
					    <label class="col-sm-2 col-form-label">Address: </label>
					    <div class="col-sm-10">
					     	<input type="text" 
							name="address" 
							className="form-control" 
							id="exampleInputPassword1" 
							placeholder="Address..."
							onChange={this.onChange} />
					    </div>
					  </div>
					  <div class="form-group row">
					    <label class="col-sm-2 col-form-label">Phone: </label>
					    <div class="col-sm-10">
					     	<input type="text" 
							name="phone" 
							className="form-control" 
							id="exampleInputPassword1" 
							placeholder="phone..."
							onChange={this.onChange} />
					    </div>
					  </div>
					  	<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" for="exampleCheck1">Creat account</label>
						</div>
						<div className="btn-submit">
							<button type="submit" className="btn btn-outline-success btnSubmit">Submit</button>
							<button type="submit" className="btn btn-outline-primary btnReset">Reset</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;