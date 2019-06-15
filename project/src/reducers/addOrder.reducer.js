const stateDefault = [
    {
        product: 'Canon 750D',
        total: 12050000,
        address: "Quangnam",
        status: "Shipping",
        date: "06/10/2019"
    },
]

const myReducer = (state = stateDefault, action) => {
    if(action.type === "addOrder"){
        let address = action.address
        return [...state,{address}];
    } else{
        return state;
    }
}
export default myReducer;