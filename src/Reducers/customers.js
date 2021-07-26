import *as types from "../Constants/ActionType";

let initialState = [];
const customers = (state = initialState, action) => {
    // let index = -1;
    // let { id, product } = action;
    switch (action.type) {
        case types.FETCH_USERS:
            return action.customers
        default:
            return state;
    }
}



export default customers