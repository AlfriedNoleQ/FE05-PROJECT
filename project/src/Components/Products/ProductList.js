import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/ProductList.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../format/priceFormatter";

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
						<div className="card">
							<div className="img-container p-5"  >
								<Link to={ `/details/${product.id}`}>
									<img className="card-img-top" src={ require(`../../${product.img}`)}/>
								</Link>
							</div>
						</div>
						<div className="card-footer text-center">
							<Link to={ `/details/${product.id}`}>
								<h5 className="align-self-center mb-0">{product.name}</h5>
							</Link>
							<h5 className="text-red text-danger font-italic mb-0">{formatMoney(product.price)} đ</h5>
							<h6 className="text-muted">{product.description}</h6>
						</div>
					</div>
				)
			})
		) : (
			<div className="center"></div>
		)
    return (
    	<div className="container-fluid py-3">
    		<div className="container">
    			<div className="row">
    				{productList}
    			</div>
    		</div>
    	</div>
    );
  }
}

export default ProductList;