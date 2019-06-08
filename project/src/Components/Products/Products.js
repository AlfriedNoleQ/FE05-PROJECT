import React, {Component} from 'react';
import FilterBar from './FilterBar';
import ProductList from './ProductList';
import {connect} from 'react-redux';
import Axios from 'axios';
import queryString from 'query-string';

class Products extends Component {
  constructor(props) {
    super(props);
    this.props.getProducts();
    const query = queryString.parse(props.location.search);
    this.state = {
      search: query.search
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container" style={{paddingTop: '3rem'}} >
          <div className="row">
            <FilterBar/>
            <ProductList search={this.state.search}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default connect(
	null,
	(dispatch) => ({
		getProducts: () => (
      Axios.get('http://localhost:3000/products')
        .then(response => {
          const payload = response.data.slice(0,10);
          dispatch({ type: 'GET_PRODUCTS', payload });
        })
		)
	})
)(Products);