import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import OrderItem from '../../Components/OrderItem/OrderItem'
import OrderList from '../../Components/OrderList/OrderList'
import apiCaller from '../../Utils/apiCaller'

function DashboardPage(props) {
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
                return index < 5 ? (
                    <OrderItem
                        key={index}
                        order={order}
                        index={index}
                    />
                ): null
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
                    <div className="right__cardNumber">72</div>
                    <div className="right__cardDesc">Xem Chi Tiết <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-customers">
                    <div className="right__cardTitle">Khách Hàng</div>
                    <div className="right__cardNumber">12</div>
                    <div className="right__cardDesc">Xem Chi Tiết <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-categories">
                    <div className="right__cardTitle">Danh Mục</div>
                    <div className="right__cardNumber">4</div>
                    <div className="right__cardDesc">Xem Chi Tiết <img src="/assets/arrow-right.svg" alt='' /></div>
                </Link>
                <Link className="right__card" to="/admin/view-orders">
                    <div className="right__cardTitle">Đơn Hàng</div>
                    <div className="right__cardNumber">72</div>
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

