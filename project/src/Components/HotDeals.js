import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../styles/HomeProducts.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class HotDeals extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hotDeals: [],
		};
	}

	componentDidMount() {
		Axios({
			method: 'get',
			url: 'http://localhost:3000/products',
			data: null
		}).then(response => {
			console.log(response);
			this.setState ({
				hotDeals: response.data.slice(0,4)
			});
		}).catch (err => {
			console.log(err);
		});
	}

	render() {
		let list = this.state.hotDeals.map((item)=>{
					return(
						<div className="col-12 mx-auto col-md-6 col-lg-3 my-3">
							<div className="card">
								<div className="img-container p-5">
									<Link to={ `/details/${item.id}`}>
										<img className="card-img-top" src={ require(`../${item.img}`)}/>
									</Link>
								</div>
							</div>
							<div className="card-footer d-flex justify-content-between">
								<p className="align-self-center mb-0">{item.name}</p>
								<h5 className="text-blue font-italic mb-0">${item.price}</h5>
							</div>
						</div>
					)
				});
		return(
			<div>
				<div className="container-fluid">
					<div className="container">
						<div className="content">
							<span className="d-inline-block title">HOT DEALS</span>
							<Link to="/products" className="float-right">more...</Link>
						</div>
					</div>
				</div>
				<div className="container py-3">
					<div className="container">
						<div className="row">
							{list}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HotDeals;