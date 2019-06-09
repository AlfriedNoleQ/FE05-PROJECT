import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import Comment from './Comment';

class Details extends Component {
	constructor(props) {
		super(props);
		const id = this.props.match.params.id;
		this.state = {
      		id
		}
	}
		
	render() {
		return(
			<React.Fragment>
				<ProductDetails id={this.state.id} />
				<Comment />
			</React.Fragment>
		);
	}
}

export default Details;