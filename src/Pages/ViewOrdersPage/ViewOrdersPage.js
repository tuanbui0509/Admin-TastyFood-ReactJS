import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import OrderItem from '../../Components/OrderItem/OrderItem'
import OrderList from '../../Components/OrderList/OrderList'
import apiCaller from '../../Utils/apiCaller'
export default function ViewOrdersPage() {
    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch()
    const history = useHistory();

    const fetchP = async () => {
        try {
            const res = await apiCaller('Orders', 'GET', null);
            // console.log(res.data);
            dispatch({ type: 'FETCH_ORDERS', orders: res.data })
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchP()
    }, [])
    console.log(orders);
    const showOrder = () => {
        let result = null
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                return (
                    <OrderItem
                        key={index}
                        order={order}
                        index={index}
                    />
                )
            })
        }
        return result
    }
    return (
        <>
            <OrderList >{showOrder()}</OrderList>
        </>
    )
}
