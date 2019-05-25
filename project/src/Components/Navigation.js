import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import {Switch,Route} from 'react-router-dom';
import logo from './images/logo.png';

class Navigation extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
					<div className="container-fluid">
						<a className="navbar-brand" href="#"><img src={logo} height="75" width="75" /></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarReponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Blog</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Product</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Guide</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;