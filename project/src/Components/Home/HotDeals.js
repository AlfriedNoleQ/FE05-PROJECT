import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../../styles/HomeProducts.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../format/priceFormatter";
import {ProductConsumer} from '../../context';
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
				hotDeals: response.data.slice(0,8)
			});
		}).catch (err => {
			console.log(err);
		});
	}

	render() {
		let list = this.state.hotDeals.map((product)=>{
			return(
				<div className="container col-12 col-md-6 col-lg-3 my-3">
					<div className="card">
						<div className="img-container p-5">
							<Link to={ `/details/${product.id}`}>
								<img className="card-img-top img" src={ require(`../../${product.img}`)}/>
							</Link>
						</div>
					<div className="product-card-footer text-center">
						<Link to={ `/details/${product.id}`}>
							<h5 className="align-self-center mb-0">{product.name}</h5>
						</Link>
						<h5 className="text-red text-danger font-italic mb-0">{formatMoney(product.price)} đ</h5>
						<h6 className="text-muted">{product.description}</h6>
					</div>
					<ProductConsumer>
						{value => {
							return(
								<button
									className="btn btn-outline-success mb-2" 
									disabled={product.inCart?true:false} onClick={() => {
									value.addToCart(Number(product.id)); product.inCart = true;}}>
									{product.inCart ? 'In cart' : 'Add to cart'}
								</button>
							)
						}}
					</ProductConsumer>
					</div>
				</div>
			)
		});
		return(
			<div>
				<div className="container-fluid">
					<div className="container">
						<div className="content text-center">
							<span className="d-inline-block title font-weight-bold">HOT DEALS</span>
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

export default HotDeals;