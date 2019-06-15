import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/ProductList.css';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../format/priceFormatter";
import {ProductConsumer} from '../../context';
import {connect} from 'react-redux';
import {brandFilter} from "../../pipes/brandFilter";
import {orderByFilter} from "../../pipes/orderByFilter";

class ProductList extends Component {
	constructor(props) {
		super(props);
		let products = this.props.products;
		this.state = {
			products,
		};
	}

	componentWillReceiveProps(props){
		if (this.props.products !== props.products) {
			let products = props.products;
			if (props.search) {
				products = products.filter(({ name }) => name.includes(this.props.search) );
			}
			this.setState({ products });
		}
	}
	
	render() {
		const { products } = this.state;
		const productList = products.length ? (
			products.map(product => {
				return (
					<div className="col-9 col-md-6 col-lg-3 my-3">
						<div className="card h-100 border">
							<div className="img-container p-4">
								<Link to={ `/details/${product.id}`}>
									<img className="card-img-top" src={ require(`../../${product.img}`)}/>
								</Link>
							</div>
							<div className="product-card-footer text-center">
								<Link to={ `/details/${product.id}`}>
									<h5 className="align-self-center">{product.name}</h5>
								</Link>
								<h5 className="text-red text-danger font-italic">{formatMoney(product.price)} đ</h5>
								<div className="product-rates">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
								<h6 className="text-muted">{product.description}</h6>
								<ProductConsumer>
									{value => {
										return(
											<button
												className="btn btn-outline-success mb-2" 
												disabled={product.inCart?true:false} onClick={() => {
												value.addToCart(Number(product.id)); product.inCart = true;}}>
												{product.inCart ? <i class="fas fa-cart-arrow-down"/> : <i class="fas fa-cart-plus"/>}
											</button>
										)
									}}
								</ProductConsumer>
							</div>
						</div>
					</div>
				)
			})
		) : (
			<div className="center"></div>
		);
		return (
			<div className="col-lg-9">
				<div className="row mb-2">
					<div className="col-12 d-none d-lg-block d-xl-block">
						<div className="card-product border">
							<div className="card-header d-flex justify-content">
								<h3 className="mr-3">Products </h3>
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

export default connect(
	(state) => {
		const brands = state.brandFilter;
		const orderBy = state.orderBy;
	
		const filterByBrandArr = brandFilter(state.shop.products, brands);
		const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);

		let filterByName = filterByOrderArr;
		if (state.shop.search) {
			filterByName = filterByName.filter(({ name }) => name.includes(state.shop.search) );
		}

		return { products: filterByName }
	},
)(ProductList);