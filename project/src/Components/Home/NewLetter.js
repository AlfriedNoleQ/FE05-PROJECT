import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../../styles/NewLetter.css';

class NewLetter extends Component {
	render() {
		return(
			<div className="newletter">
				<div className="container-fluid padding">
					<hr/>
					<div className="row text-center padding">
						<div className="col-12">
							<span className="letter-title font-weight-bold">NEWS LETTER</span>
						</div>
					</div>
					<div className="container col-6 text-center">
						<div className="row padding">
							<input type="email" 
							className="form-control" 
							placeholder="Your Email..."/>
						</div>
						<div className="text-center">
							<button type="submit" 
							className="btn btn-success">Sign In</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewLetter;