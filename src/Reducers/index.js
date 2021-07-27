import { combineReducers } from 'redux'
import isToken from './isToken'
import products from './products'
import orders from './orders'
import categories from './categories'
import customers from './customers'
import account from './account'
const myReducers = combineReducers({
    isToken,
    products,
    orders,
    categories,
    customers,
    account
});
export default myReducers;