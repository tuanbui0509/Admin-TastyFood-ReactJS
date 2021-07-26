import *as types from "../Constants/ActionType";

let initialState = [];
const products = (state = initialState, action) => {
    // let index = -1;
    // let { id, product } = action;
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return action.products
        default:
            return state;
    }
}



export default products