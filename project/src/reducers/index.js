import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {brandFilterReducer} from './brand.filter.reducer';
import {orderByPriceReducer} from './orderByPrice.filter.reducer';

export default combineReducers({
    shop,
    brandFilter: brandFilterReducer,
    orderBy: orderByPriceReducer
});

