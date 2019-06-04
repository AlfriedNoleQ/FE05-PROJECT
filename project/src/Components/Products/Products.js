import React, {Component} from 'react';
import FilterBar from './FilterBar';
import ProductList from './ProductList';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" style={{paddingTop: '3rem'}} >
                    <div className="row">
                        <FilterBar/>
                        <ProductList/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default Products;