import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/ProductList.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../format/priceFormatter";
import {ProductConsumer} from '../../context';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount(){
		Axios.get('http://localhost:3000/products')
		.then(response => {
			console.log(response.data);
			this.setState({products: response.data.slice(0,10)});
		});
	};

	render() {
		const {products} = this.state;
		const productList = products.length ? (
			products.map(product => {
				return (
					<div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
						<div className="card h-100 border">
							<div className="img-container p-5"  >
								<Link to={ `/details/${product.id}`}>
									<img className="card-img-top" src={ require(`../../${product.img}`)}/>
								</Link>
							</div>
							<div className="card-footer text-center">
								<Link to={ `/details/${product.id}`}>
									<h5 className="align-self-center mb-0">{product.name}</h5>
								</Link>
								<h5 className="text-red text-danger font-italic mb-0">{formatMoney(product.price)} đ</h5>
								<h6 className="text-muted">{product.description}</h6>
								<button className="btn btn-outline-success" >
									<i class="fas fa-cart-plus"></i>
								</button>
							</div>
						</div>
					</div>
				)
			})
		) : (
			<div className="center"></div>
		)
    return (
    	<div className="col-lg-9">
			<div className="row mb-3">
				<div className="col-12 d-none d-lg-block d-xl-block">
					<div className="card ">
						<div className="card-header d-flex justify-content">
							<h3 className="mr-3">Products: </h3>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				{productList}
			</div>
    	</div>
    );
  }
}

export default ProductList;