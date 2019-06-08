import React, {useState} from 'react';
import {connect} from 'react-redux';
import {clearOrderBy, ORDER_BY_ASC, ORDER_BY_DESC, orderByAsc, orderByDesc} from "../../actions";

const PriceFilter = ({dispatch}) => {

    let removeSelected;
    const [selected, setSelected] = useState('');

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if(value === ORDER_BY_ASC) {
            dispatch(orderByAsc());
        } else {
            dispatch(orderByDesc());
        }
    };

    const removeFilter = (e) => {

        const buttons = document.getElementsByName('orderByPrice');

        buttons.forEach(el => {
            el.checked = false;
        });

        dispatch(clearOrderBy());
        setSelected('');
    };

    if(selected) {
        removeSelected  =  <span onClick={removeFilter} className="text-remove-selected text-right"><i class="fas fa-times"></i></span>
    }



    return (
        <div className="card-price border">
            <div className="card-header">
                <h3>Price {removeSelected} </h3>
            </div>
            <ul className="list-group flex-row  flex-wrap" >
                <li className="list-group-item flex-fill">
                    <input
                        value={ORDER_BY_ASC}
                        type="radio"
                        onChange={handleRadioChange}
                        name="orderByPrice" className="custom-radio-btn__input"
                    />
                    <label className="custom-radio-btn ml-2"> Low to high</label>
                    <span className="custom-radio-btn__span"></span>
                </li>
                <li className="list-group-item flex-fill">
                    <input
                        value={ORDER_BY_DESC}
                        onChange={handleRadioChange}
                        type="radio" name="orderByPrice" className="custom-radio-btn__input"
                    />
                    <label className="custom-radio-btn ml-2"> High to low</label>
                    <span className="custom-radio-btn__span"></span>
                </li>
            </ul>
        </div>
    );
};

export default connect()(PriceFilter);