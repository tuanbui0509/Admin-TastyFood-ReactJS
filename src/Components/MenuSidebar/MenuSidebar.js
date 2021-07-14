import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuSidebar() {
    return (

        <div className="left">
            <span className="left__icon">
                <span />
                <span />
                <span />
            </span>
            <div className="left__content">
                <div className="left__logo">LOGO</div>
                <div className="left__profile">
                    <div className="left__image"><img src="/assets/profile1.jpg" alt /></div>
                    <p className="left__name">Bùi Ngọc Tuấn</p>
                </div>
                <ul className="left__menu">
                    <li className="left__menuItem">
                        <Link to="/" className="left__title"><img src="/assets/icon-dashboard.svg" alt />Dashboard</Link>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="/assets/icon-tag.svg" alt />Sản Phẩm<img className="left__iconDown" src="/assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <Link className="left__link" to="/admin/insert-product">Chèn Sản Phẩm</Link>
                            <Link className="left__link" to="/admin/view-product">Xem Sản Phẩm</Link>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="/assets/icon-edit.svg" alt />Danh Mục SP<img className="left__iconDown" src="/assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <Link className="left__link" to="/admin/insert-category">Chèn Danh Mục</Link>
                            <Link className="left__link" to="/admin/view-p_category">Xem Danh Mục</Link>
                        </div>
                    </li>
                    {/* <li className="left__menuItem">
                        <div className="left__title"><img src="/assets/icon-settings.svg" alt />Slide<img className="left__iconDown" src="/assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <Link className="left__link" to="/admin/insert-slide">Chèn Slide</Link>
                            <Link className="left__link" to="/admin/view-slides">Xem Slide</Link>
                        </div>
                    </li> */}
                    <li className="left__menuItem">
                        <div className="left__title"><img src="/assets/icon-book.svg" alt />Coupons<img className="left__iconDown" src="/assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <Link className="left__link" to="/admin/insert-coupon">Chèn Coupon</Link>
                            <Link className="left__link" to="/admin/view-coupons">Xem Coupons</Link>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <Link to="/admin/view-customers" className="left__title"><img src="/assets/icon-users.svg" alt />Khách Hàng</Link>
                    </li>
                    <li className="left__menuItem">
                        <Link to="/admin/view-orders" className="left__title"><img src="/assets/icon-book.svg" alt />Đơn Đặt Hàng</Link>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="/assets/icon-user.svg" alt />Admin<img className="left__iconDown" src="/assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <Link className="left__link" to="/admin/insert-admin">Chèn Admin</Link>
                            <Link className="left__link" to="/admin/view-admins">Xem Admins</Link>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <Link to className="left__title"><img src="/assets/icon-logout.svg" alt />Đăng Xuất</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
