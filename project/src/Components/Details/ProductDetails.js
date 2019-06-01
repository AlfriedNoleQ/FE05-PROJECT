import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {ProductConsumer} from '../../context';
import {formatMoney} from "../../format/priceFormatter";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
		this.state = {
            id: this.props.id,
            product: {},
		}
	}

	componentDidMount(){
        Axios.get(`http://localhost:3000/products/${this.state.id}`)
		.then(response => {
			// console.log(response.data);
			this.setState({product: response.data});
		});
    }
    
    render() {
        const {product,id} = this.state;
		const productDetail =  Object.keys(product).length ? (
            <ProductConsumer>
                {value => {
                    return (<div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted my-5">
                                <h2>{product.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 border text-capitalize">
                                <img src={require(`../../${product.img}`)} className="img-fluid" alt="product" />
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h3>Company: {product.company}</h3>
                                <h3 className="text-red">Price: <font color="red">{formatMoney(product.price)}</font> Đ</h3>
                                <h3>Product Info:</h3><div className="mb-3" dangerouslySetInnerHTML={{__html: product.info}} />
                                <div>
                                    <Link to="/products">
                                        <button className="btn btn-primary text-uppercase">continue shopping</button>
                                    </Link>
                                    <button className="btn btn-success text-uppercase mx-3" disabled={product.inCart?true:false} onClick={() => {
                                        value.addToCart(Number(id)); product.inCart = true;}}>
                                        {product.inCart ? 'in cart' : 'add to cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }}
            </ProductConsumer>
        ) : (
			<div className="center"></div>
        )
        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        {productDetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;