import callApi from '../Utils/apiCaller'
import *as types from '../Constants/ActionType'

// fetch all product
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        callApi('products/products', 'GET', null).then(res => {
            console.log(res.data);
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}
// fetch all ORDER
export const actFetchOrdersRequest = () => {
    return (dispatch) => {
        callApi('orders', 'GET', null).then(res => {
            dispatch(actFetchOrders(res.data));
        });
    };
}

export const actFetchOrders = (orders) => {
    return {
        type: types.FETCH_ORDERS,
        orders
    }
}

// fetch all ORDER
export const actFetchUsersRequest = () => {
    return (dispatch) => {
        callApi('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        });
    };
}

export const actFetchUsers = (users) => {
    return {
        type: types.FETCH_USERS,
        users
    }
}

// fetch all ORDER
export const actFetchCategoriesRequest = () => {
    return (dispatch) => {
        callApi('users', 'GET', null).then(res => {
            dispatch(actFetchCategories(res.data));
        });
    };
}

export const actFetchCategories = (categories) => {
    return {
        type: types.FETCH_CATEGORIES,
        categories
    }
}