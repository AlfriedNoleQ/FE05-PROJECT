import React, {Component} from 'react';
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";

class FilterBar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <BrandFilter/>
                    </div>
                    <div className="col-12">
                        <PriceFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;