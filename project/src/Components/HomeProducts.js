import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../styles/HomeProducts.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {formatMoney} from "./../format/priceFormatter";

class HomeProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeProducts: [],
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
				homeProducts: response.data.slice(0,8)
			});
		}).catch (err => {
			console.log(err);
		});
	}

	render() {
		let list = this.state.homeProducts.map((item)=>{
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
							</div>
							<div className="card-footer text-center d-flex justify-content-between">
								<h5 className="text-red text-danger font-italic mb-0">{formatMoney(item.price)} đ</h5>
							</div>
						</div>
					)
				});
		return(
			<div>
				<div className="container-fluid">
					<div className="container">
						<div className="content text-center">
							<span className="d-inline-block title">NEW PRODUCTS</span>
						</div>
					</div>
				</div>
				<div className="container-fluid py-3">
					<div className="container">
						<div className="row">
							{list}
						</div>
					</div>
					<div className="text-center padding">
						<Link to="/products"><button className="btn btn-outline-success btn-lg">More...</button></Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeProducts;