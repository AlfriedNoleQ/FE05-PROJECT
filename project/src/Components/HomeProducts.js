import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import Axios from 'axios';

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
				homeProducts: response.data.slice(0,10)
			});
		}).catch (err => {
			console.log(err);
		});
	}

	render() {
		return(
			<div>
				<div className="container-fluid text-center">
					<a href="#"><h2>PRODUCTS</h2></a>
				</div>	
			</div>
		);
	}
}

export default HomeProducts;