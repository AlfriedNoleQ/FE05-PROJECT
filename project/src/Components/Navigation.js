import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Link} from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../images/htq.png';
import {ProductConsumer} from '../context';
import {connect} from 'react-redux';

class Navigation extends Component {
	search = (event) => {
		if (event.key ==='Enter') {
			this.props.dispatch({ type: 'SET_SEARCH', payload: event.target.value });
		}
	}

	render() {
		return(
			<ProductConsumer>
				{value => {
					const {cart} = value;
					return (
						<div>
							<nav className="navbar navbar-expand-lg navbar-light bg-light">

								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>

								<Link to="/"className="nav-link">
									<img src={logo} alt="logo" className="navbar-brand ml-4" height="50" width="120"/>
								</Link>

								<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
									<ul className="navbar-nav mr-auto mt-2 mt-lg-0">

										<li className="nav-item">
											<Link to="/"className="nav-link navlink">
												HOME
											</Link>
										</li>

										<li className="nav-item">
											<Link to="/products"className="nav-link navlink">
												PRODUCTS
											</Link>
										</li>

										<li className="nav-item">
											<Link to="/guide"className="nav-link navlink">
												GUIDE
											</Link>
										</li>

										<li className="nav-item">
											<Link to="/blog"className="nav-link navlink">
												BLOG
											</Link>
										</li>

										<li className="nav-item">
											<Link to="/signup" className="nav-link navlink">
												REGISTER
											</Link>
										</li>

										<li className="nav-item">
											<div className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
											  aria-hidden="true">
											  <div className="modal-dialog" role="document">
											    <div className="modal-content">
											      <div className="modal-header text-center">
											        <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
											        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
											          <span aria-hidden="true">&times;</span>
											        </button>
											      </div>
											      <div className="modal-body mx-3">
											        <div className="md-form mb-5">
											          <i className="fas fa-envelope prefix grey-text">
											           <label data-error="wrong" data-success="right" for="defaultForm-email">
											          Your email or username</label>
											          </i>
											          <input type="email" id="defaultForm-email" className="form-control validate"/>
											        </div>

											        <div className="md-form mb-4">
											          <i className="fas fa-lock prefix grey-text">
											           <label data-error="wrong" data-success="right" for="defaultForm-pass">
											          Your password</label>
											          </i>
											          <input type="password" id="defaultForm-pass" className="form-control validate"/>
											        </div>

											      </div>
											      <div className="modal-footer d-flex justify-content-center">
											        <button className="btn btn-outline-primary">Login</button>
											      </div>
											    </div>
											  </div>
											</div>

											<Link className="nav-link navlink" data-toggle="modal" data-target="#modalLoginForm">
												LOGIN
											</Link>
										</li>

									</ul>

									<div className="form-inline my-2 my-lg-0">
										<div className="container-1">
												<span className="icon"><i className="fa fa-search"></i></span>
												<input type="search" id="search" name="search" placeholder="Search..." onKeyUp={ this.search } />
										</div>
									</div>

									<div className="dropdown ml-auto">
										<button className="btn btn-outline-secondary account dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i className="fas fa-user mr-3"></i>Welcome
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<Link to="/">
												<a className="dropdown-item">My Profile</a>
											</Link>
											<Link to="/">
												<a className="dropdown-item">Orders History</a>
											</Link>
										</div>
									</div>

									<Link to="/cart" className="ml-4 mr-5">
										<button className="btn btn-outline-success cart">
											<i className="fas fa-shopping-cart ml-1 mr-1"></i>({cart.length})
										</button>
									</Link>

								</div>
							</nav>
						</div>
					)
				}}
			</ProductConsumer>
		);
	}
}

export default connect()(Navigation);