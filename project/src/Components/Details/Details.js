import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import Comment from './Comment';
import InfoPlus from './InfoPlus';

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
				<div className="row">
					<div className="col-md-9">
						<ProductDetails id={this.state.id} />
					</div>
					<div className="col-md-3" style={{paddingTop: '6rem', paddingBottom: '2rem'}}>
						<InfoPlus />
					</div>
				</div>
				<Comment />
			</React.Fragment>
		);
	}
}

export default Details;