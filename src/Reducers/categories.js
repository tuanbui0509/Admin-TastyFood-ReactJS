import *as types from "../Constants/ActionType";

let initialState = [];
const categories = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return action.categories
        default:
            return state;
    }
}



export default categories