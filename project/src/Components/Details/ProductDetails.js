import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {ProductConsumer} from '../../context';
import {formatMoney} from "../../format/priceFormatter";
import '../../styles/ProductDetails.css';
import '../../styles/ProductSlider.css';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
		this.state = {
            id: this.props.id,
            product: {},
            slideIndex: -1,
		}
	}

	componentDidMount(){
        Axios.get(`http://localhost:3000/products/${this.state.id}`)
		.then(response => {
			this.setState({product: response.data});
		});
    }

    clickSlideImage(index) {
        this.setState({ slideIndex: index });
    }
    
    render() {
        const {product,id, slideIndex} = this.state;
        
        let slider = [];
        if (product.slide) {
            slider = product.slide.map((img, index) => (
                <div className="pb-4">
                    <img
                        src={require(`../../${img}`)}
                        className={`img-fluid ${ index === slideIndex ? 'active' : '' }`}
                        alt="product" 
                        onClick={ () => this.clickSlideImage(index) } />
                </div>
                )
            );
        }
		const productDetail =  Object.keys(product).length ? (
            <ProductConsumer>
                {value => {
                    return (<div className="container-fluid ml-3">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted my-5">
                                <h2>{product.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div class="slider col-1 col-md-1 my-3">
                                { slider }
                            </div>
                            <div className="col-10 col-md-6 my-3 border text-capitalize">
                                <img
                                    src={require(`../../${slideIndex != -1 ? product.slide[slideIndex] : product.img}`)}
                                    className="img-fluid"
                                    alt="product" />
                            </div>
                            <div className="col-9 col-md-5 my-3 text-capitalize">
                                <h3>Company: {product.brand}</h3>
                                <h3 className="text-red">Price: <font color="red">{formatMoney(product.price)}</font> đ</h3>
                                <div className="ml-1 mb-2">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                                <h3>Product Info:</h3><div className="mb-3" dangerouslySetInnerHTML={{__html: product.info}} />
                                <div className="text-center">
                                    <button className="btn btn-success text-uppercase mr-3" disabled={product.inCart?true:false} onClick={() => {
                                        value.addToCart(Number(id)); product.inCart = true;}}>
                                        {product.inCart ? 'in cart' : 'add to cart'}
                                    </button>
                                    <Link to="/products">
                                        <button className="btn btn-primary text-uppercase">continue shopping</button>
                                    </Link>
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
            <div className="container-fluid">
                <div className="row">
                    {productDetail}
                </div>
            </div>
        );
    }
}

export default ProductDetails;