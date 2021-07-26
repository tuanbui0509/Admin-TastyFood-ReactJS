import { combineReducers } from 'redux'
import isToken from './isToken'
import products from './products'
import orders from './orders'
import categories from './categories'
import customers from './customers'
const myReducers = combineReducers({
    isToken,
    products,
    orders,
    categories,
    customers
});
export default myReducers;