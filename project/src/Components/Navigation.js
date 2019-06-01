import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Link} from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../images/logo.png';

class Navigation extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
					<Link to="/"className="nav-link">
						<img src={logo} alt="logo" className="navbar-brand ml-4" height="50" width="50"/>
					</Link>
				  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				      <li className="nav-item">
							<Link to="/" className="nav-link navlink">
			                  HOME
			                </Link>
				      </li>
				      <li className="nav-item">
							<Link to="/products" className="nav-link navlink">
			                  PRODUCTS
			                </Link>
				      </li>
				      <li className="nav-item">
							<Link to="/guide" className="nav-link navlink">
			                  GUIDE
			                </Link>
				      </li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link navlink">
			                  BLOG
			                </Link>
				      </li>
				    </ul>
				    <form className="form-inline my-2 my-lg-0">
				      <input className="form-control mr-sm-2" id="inputsearch" type="search" placeholder="Search..." aria-label="Search" />
				      <button className="btn btn-primary my-2 my-sm-0"  type="submit"><i className="fa fa-search"></i></button>
				    </form>
						<div className="dropdown ml-auto">
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							 <i className="fas fa-user mr-2"></i>ACCOUNT
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<Link to="/signin" className="nav-link">
									<a className="dropdown-item">Sign in</a>
								</Link>
								<Link to="/signup" className="nav-link">
									<a className="dropdown-item">Sign up</a>
								</Link>
							</div>
						</div>
						<Link to="/cart" className="ml-5 mr-5" className="nav-link">
							<button className="btn btn-outline-primary cart">
								CART -<i className="fas fa-shopping-cart ml-1 mr-1"></i>(0)
							</button>
						</Link>
				  </div>
				</nav>
			</div>
		);
	}
}

export default Navigation;