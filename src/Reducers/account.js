import *as types from "../Constants/ActionType";

let initialState = [];
const account = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_ACCOUNT:
            console.log(action);
            return action.login
        case types.LOGOUT_ACCOUNT:
            return action.logout
        default:
            return state;
    }
}



export default account