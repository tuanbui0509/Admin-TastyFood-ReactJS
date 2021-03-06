import React from 'react'
export default function ProductList(props) {
    return (
        <div>
            <div className="right__title">Bảng điều khiển</div>
            <p className="right__desc">Xem sản phẩm</p>
            <div className="right__table">
                <div className="right__tableWrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Giá SP</th>
                                <th>Đã bán</th>
                                <th>Số Lượng Tồn</th>
                                <th>Thời gian</th>
                                <th>Sửa</th>
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
