import React, { useEffect } from 'react'
import ProductList from '../../Components/ProductList/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ProductItem from '../../Components/ProductItem/ProductItem'
import apiCaller from '../../Utils/apiCaller'
export default function ViewProductsPage() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const history = useHistory();

    const fetchP = async () => {
        try {
            let token = localStorage.getItem('tokenApp');
            const res = await apiCaller('Products/products', 'GET', null,token);
            // console.log(res.data);
            dispatch({ type: 'FETCH_PRODUCTS', products: res.data })
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchP()
    }, [])
    const showProduct = () => {
        let result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            })
        }
        return result
    }



    return (
        <>
            <ProductList >{showProduct()}</ProductList>
        </>
    )
}