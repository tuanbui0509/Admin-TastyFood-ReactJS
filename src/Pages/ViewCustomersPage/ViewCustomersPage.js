import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CustomerItem from '../../Components/CustomerItem/CustomerItem'
import CustomerList from '../../Components/CustomerList/CustomerList'
import apiCaller from '../../Utils/apiCaller'
export default function ViewCustomersPage() {
    const customers = useSelector(state => state.customers )
    const dispatch = useDispatch()
    const history = useHistory();

    const fetchP = async () => {
        try {
            let token = localStorage.getItem('tokenApp');
            const res = await apiCaller('Users ', 'GET', null,token);
            // console.log(res.data);
            dispatch({ type: 'FETCH_USERS', customers: res.data })
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchP()
    }, [])
    const showCustomer = () => {
        let result = null
        if (customers.length > 0) {
            result = customers.map((customer, index) => {
                return (
                    <CustomerItem
                        key={index}
                        customer={customer}
                        index={index}
                    />
                )
            })
        }
        return result
    }
    return (
        <>
            <CustomerList >{showCustomer()}</CustomerList>
        </>
    )
}
