import React from 'react'

function OrderList(props) {
    return (
        <>
            <div className="right__title">Bảng điều khiển</div>
            <p className="right__desc">Xem đơn hàng</p>
            <div className="right__table">
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
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OrderList
