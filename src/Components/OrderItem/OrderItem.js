import React from 'react'
import { Link } from 'react-router-dom'

function OrderItem(props) {
    const { order, index } = props
    return (
        <tr>
            <td data-label="STT">{index + 1}</td>
            <td data-label="Số hoá đơn">{order.id}</td>
            <td data-label="Email">{order.shipEmail}</td>
            <td data-label="Tên nguoi nhan">{order.shipName}</td>
            <td data-label="Tên dia chi">{order.shipAddress}</td>
            <td data-label="Ngày">{order.orderDate}</td>
            {/* <td data-label="Ngày">{order.shipPhoneNumber}</td> */}
            <td data-label="Trạng thái">{order.status === 0 ? 'Đang Chờ Xử Lý' : 'Đã xác nhận'} </td>
            <td data-label="Xoá" className="right__iconTable"><a href><img src="/assets/icon-trash-black.svg" alt='' /></a></td>
            {order.status ===0?
            <td data-label="Thanh toán" className="right__confirm">
                <Link to="/" className="right__iconTable"><img src="/assets/icon-check.svg" alt='' /></Link>
                <Link to="/" className="right__iconTable"><img src="/assets/icon-x.svg" alt='' /></Link>
            </td>
            :<td>
            <Link to="/" className="right__iconTable"><img src="/assets/icon-check.svg" alt='' /></Link>
            </td>}
        </tr>

    )
    /*
    id: 0
orderDate: "2021-07-26T16:20:25.6825063"
orderDetails: null
shipAddress: "Long An"
shipEmail: "nguyena@gmail.com"
shipName: "Nguyen Van A"
shipPhoneNumber: "0936557991"
status: 0
userId: "57bb4eab-cfa3-49d7-a7b1-08d94a5f9ffd"
    */
}

export default OrderItem
