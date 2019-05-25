import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";

class Social extends Component {
	render() {
		return(
			<div>
				<div className="container-fluid padding">
					<div className="row text-center padding">
						<div className="col-12">
							<h1>Social</h1>
						</div>
						<div className="col-12 social padding">
							<a href="#"><i className="fab fa-facebook"></i></a>
							<a href="#"><i className="fab fa-twitter"></i></a>
							<a href="#"><i className="fab fa-google-plus-g"></i></a>
							<a href="#"><i className="fab fa-instagram"></i></a>
							<a href="#"><i className="fab fa-youtube"></i></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Social;