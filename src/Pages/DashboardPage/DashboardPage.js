import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import OrderItem from '../../Components/OrderItem/OrderItem'
import apiCaller from '../../Utils/apiCaller'

function DashboardPage(props) {
    const orders = useSelector(state => state.orders)
    const categories = useSelector(state => state.categories)
    const products = useSelector(state => state.products)
    const customers = useSelector(state => state.customers)
    const dispatch = useDispatch()
    const history = useHistory();

    const fetchO = async () => {
        try {
            let token = localStorage.getItem('tokenApp');
            const res = await apiCaller('Orders', 'GET', null, token);
            // console.log(res.data);
            dispatch({ type: 'FETCH_ORDERS', orders: res.data })
        } catch (err) {

        }
    }
    const fetchP = async () => {
        try {
            let token = localStorage.getItem('tokenApp');
            const res = await apiCaller('Products/products', 'GET', null, token);
            // console.log(res.data);
            dispatch({ type: 'FETCH_PRODUCTS', products: res.data })
        } catch (err) {

        }
    }
    const fetchC = async () => {
        try {
            let token = localStorage.getItem('tokenApp');
            const res = await apiCaller('Users', 'GET', null, token);
            // console.log(res.data);
            dispatch({ type: 'FETCH_USERS', customers: res.data })
        } catch (err) {

        }
    }
    const fetchA = async () => {
        try {
            let token = localStorage.getItem('tokenApp');
            const res = await apiCaller('Categories', 'GET', null, token);
            // console.log(res.data);
            dispatch({ type: 'FETCH_CATEGORIES', categories: res.data })
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchO()
        fetchP()
        fetchA()
        fetchC()
    }, [])
    const showOrder = () => {
        let result = null
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                return index < 5 ? (
                    <OrderItem
                        key={index}
                        order={order}
                        index={index}
                    />
                ) : null
            })
        }
        return result
    }
    return (
        <>
            <div className="right__title">B???ng ??i???u khi???n</div>
            <p className="right__desc">B???ng ??i???u khi???n</p>
            <div className="right__cards">
                <Link className="right__card" to="/admin/view-products">
                    <div className="right__cardTitle">S???n Ph???m</div>
                    <div className="right__cardNumber">{products.length}</div>
                    <div className="right__cardDesc">Xem Chi Ti???t <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-customers">
                    <div className="right__cardTitle">Kh??ch H??ng</div>
                    <div className="right__cardNumber">{customers.length}</div>
                    <div className="right__cardDesc">Xem Chi Ti???t <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-categories">
                    <div className="right__cardTitle">Danh M???c</div>
                    <div className="right__cardNumber">{categories.length}</div>
                    <div className="right__cardDesc">Xem Chi Ti???t <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-orders">
                    <div className="right__cardTitle">????n H??ng</div>
                    <div className="right__cardNumber">{orders.length}</div>
                    <div className="right__cardDesc">Xem Chi Ti???t <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
            </div>
            <div className="right__table">
                <p className="right__tableTitle">????n h??ng m???i</p>
                <div className="right__tableWrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>S??? ho?? ????n</th>
                                <th>Email</th>
                                <th>T??n ng?????i mua</th>
                                <th>?????a ch???</th>
                                <th>Ng??y ?????t</th>
                                <th>Tr???ng th??i</th>
                                <th>Thanh to??n</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showOrder()}
                        </tbody>
                    </table>
                </div>
                <Link to='/admin/view-orders' className="right__tableMore"><p>Xem t???t c??? c??c ????n ?????t h??ng</p> <img src="/assets/arrow-right-black.svg" alt='' /></Link>
            </div>
        </>
    )
}

export default DashboardPage

