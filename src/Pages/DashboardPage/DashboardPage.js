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
            <div className="right__title">Bảng điều khiển</div>
            <p className="right__desc">Bảng điều khiển</p>
            <div className="right__cards">
                <Link className="right__card" to="/admin/view-products">
                    <div className="right__cardTitle">Sản Phẩm</div>
                    <div className="right__cardNumber">{products.length}</div>
                    <div className="right__cardDesc">Xem Chi Tiết <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-customers">
                    <div className="right__cardTitle">Khách Hàng</div>
                    <div className="right__cardNumber">{customers.length}</div>
                    <div className="right__cardDesc">Xem Chi Tiết <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-categories">
                    <div className="right__cardTitle">Danh Mục</div>
                    <div className="right__cardNumber">{categories.length}</div>
                    <div className="right__cardDesc">Xem Chi Tiết <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-orders">
                    <div className="right__cardTitle">Đơn Hàng</div>
                    <div className="right__cardNumber">{orders.length}</div>
                    <div className="right__cardDesc">Xem Chi Tiết <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
            </div>
            <div className="right__table">
                <p className="right__tableTitle">Đơn hàng mới</p>
                <div className="right__tableWrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Số hoá đơn</th>
                                <th>Email</th>
                                <th>Tên người mua</th>
                                <th>Địa chỉ</th>
                                <th>Ngày Đặt</th>
                                {/* <th>Số điện thoại</th> */}
                                <th>Trạng thái</th>
                                <th>Xoá</th>
                                <th>Thanh toán</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showOrder()}
                        </tbody>
                    </table>
                </div>
                <Link to='/admin/view-orders' className="right__tableMore"><p>Xem tất cả các đơn đặt hàng</p> <img src="/assets/arrow-right-black.svg" alt='' /></Link>
            </div>
        </>
    )
}

export default DashboardPage

