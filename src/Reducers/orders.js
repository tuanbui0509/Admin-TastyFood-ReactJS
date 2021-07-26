import *as types from "../Constants/ActionType";

let initialState = [];
const orders = (state = initialState, action) => {
    // let index = -1;
    // let { id, product } = action;
    switch (action.type) {
        case types.FETCH_ORDERS:
            return action.orders
        default:
            return state;
    }
}



export default orders