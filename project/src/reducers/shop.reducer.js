// import { products } from '../data/products';

const initialState = {
    products: [],
    cart: [],
    search: '',
};

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SEARCH': {
            return { ...state, search: action.payload };
        }
        case 'GET_PRODUCTS': {
            return { ...state, products: action.payload };
        }
        default:
            return state;
    }
};

export default shopReducer;
