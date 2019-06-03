import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/SignIn.css';

class SignIn extends Component {
	render() {
		return(
			<div className="container-fluid text-center">
				<h3 className="padding">Sign In</h3>
				<form className="form-login">
				  <div className="container">
				    <label for="uname"><b>Username</b></label>
				    <input type="text" 
				    placeholder="Enter Username" 
				    name="uname" required />

				    <label for="psw"><b>Password</b></label>
				    <input type="password" 
				    placeholder="Enter Password" 
				    name="psw" required />

				    <label>
				      <input type="checkbox" 
				      checked="checked" 
				      name="remember" /> Remember me
				    </label>
				  </div>
				  <div className="btn-login">
					<button type="submit" className="btn btn-success btnLogin">Login</button>
				  	<button type="button" className="btn btn-danger btnCancel">Cancel</button>
				  </div>
				  <div className="container btn-signin">
				    <span className="psw">Forgot <a href="#">password?</a></span>
				  </div>
				</form>
			</div>
		);
	}
}

export default SignIn;