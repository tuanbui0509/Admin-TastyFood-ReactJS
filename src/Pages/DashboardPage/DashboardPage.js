import React from 'react'

function DashboardPage(props) {
    return (
        <div className="right">
            <div className="right__content">
                <div className="right__title">Bảng điều khiển</div>
                <p className="right__desc">Bảng điều khiển</p>
                <div className="right__cards">
                    <a className="right__card" href="view_product.html">
                        <div className="right__cardTitle">Sản Phẩm</div>
                        <div className="right__cardNumber">72</div>
                        <div className="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt /></div>
                    </a>
                    <a className="right__card" href="view_customers.html">
                        <div className="right__cardTitle">Khách Hàng</div>
                        <div className="right__cardNumber">12</div>
                        <div className="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt /></div>
                    </a>
                    <a className="right__card" href="view_p_category.html">
                        <div className="right__cardTitle">Danh Mục</div>
                        <div className="right__cardNumber">4</div>
                        <div className="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt /></div>
                    </a>
                    <a className="right__card" href="view_orders.html">
                        <div className="right__cardTitle">Đơn Hàng</div>
                        <div className="right__cardNumber">72</div>
                        <div className="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt /></div>
                    </a>
                </div>
                <div className="right__table">
                    <p className="right__tableTitle">Đơn hàng mới</p>
                    <div className="right__tableWrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th style={{ textAlign: 'left' }}>Email</th>
                                    <th>Số Hoá Đơn</th>
                                    <th>ID Sản Phẩm</th>
                                    <th>Số Lượng</th>
                                    <th>Kích thước</th>
                                    <th>Trạng Thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="STT">1</td>
                                    <td data-label="Email" style={{ textAlign: 'left' }}>chibaosinger@gmail.com</td>
                                    <td data-label="Số Hoá Đơn">6577544</td>
                                    <td data-label="ID Sản Phẩm">2</td>
                                    <td data-label="Số Lượng">1</td>
                                    <td data-label="Kích thước">Trung Bình</td>
                                    <td data-label="Trạng Thái">
                                        Đã Thanh Toán
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="STT">2</td>
                                    <td data-label="Email" style={{ textAlign: 'left' }}>midu@gmail.com</td>
                                    <td data-label="Số Hoá Đơn">4578644</td>
                                    <td data-label="ID Sản Phẩm">4</td>
                                    <td data-label="Số Lượng">2</td>
                                    <td data-label="Kích thước">Nhỏ</td>
                                    <td data-label="Trạng Thái">
                                        Đang Xử Lý
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="STT">3</td>
                                    <td data-label="Email" style={{ textAlign: 'left' }}>miku@gmail.com</td>
                                    <td data-label="Số Hoá Đơn">2657544</td>
                                    <td data-label="ID Sản Phẩm">3</td>
                                    <td data-label="Số Lượng">5</td>
                                    <td data-label="Kích thước">Lớn</td>
                                    <td data-label="Trạng Thái">
                                        Đang Xử Lý
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="STT">4</td>
                                    <td data-label="Email" style={{ textAlign: 'left' }}>dangthimydung@gmail.com</td>
                                    <td data-label="Số Hoá Đơn">9659544</td>
                                    <td data-label="ID Sản Phẩm">8</td>
                                    <td data-label="Số Lượng">12</td>
                                    <td data-label="Kích thước">Trung Bình</td>
                                    <td data-label="Trạng Thái">
                                        Đang Xử Lý
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href className="right__tableMore"><p>Xem tất cả các đơn đặt hàng</p> <img src="assets/arrow-right-black.svg" alt /></a>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage

