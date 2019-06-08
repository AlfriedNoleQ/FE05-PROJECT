import React from 'react';
import {connect} from 'react-redux';
import {brands} from '../../data/brands';
import {addBrandToFilter, removeBrandFromFilter} from "../../actions";
import '../../styles/BrandFilter.css';


const BrandFilter = (props) => {

    const {dispatch, brandItemsCount} = props;
    const handleSelectBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked;

        if(value) {
            dispatch(addBrandToFilter(name));
        } else {
            dispatch(removeBrandFromFilter(name));
        }
    };

        return (
            <div className="card-brand border mb-3">
                <div className="card-header">
                    <h3>Brands</h3>
                </div>
                <ul className="list-group flex-col flex-wrap">
                    {brands.map(brand => (
                        <li className="list-group-item flex-50">
                            <input type="checkbox"
                                name={brand}
                                className="custom-checkbox__input" onInput={handleSelectBox}
                            />
                            <label className="custom-checkbox text-capitalize ml-2"> {brand}</label> ({brandItemsCount[brand]})
                            <span className="custom-checkbox__span"></span>
                        </li>
                    ))}
                </ul>
            </div>
        );

};

const mapStateToProps = (state) => {

    const brandItemsCount = {};
    state.shop.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });

    return {
        brandItemsCount
    }

};

export default connect(mapStateToProps)(BrandFilter);