const initialState = {
    products: [],
    cart: []
};

const shopReducer = (state = initialState, action ) => {
    return { ...state };
};

export default shopReducer;
