import React from 'react'

function CustomerList(props) {
    return (
        <div>
            <div className="right__title">Bảng điều khiển</div>
            <p className="right__desc">Xem Khách hàng</p>
            <div className="right__table">
                <div className="right__tableWrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th style={{ textAlign: 'center' }}>Hình ảnh</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Vai trò</th>
                                <th>Xoá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerList
