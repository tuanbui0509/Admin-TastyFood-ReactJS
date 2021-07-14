import React from 'react'

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
                    <div className="left__image"><img src="assets/profile.jpg" alt /></div>
                    <p className="left__name">Hatsune Miku</p>
                </div>
                <ul className="left__menu">
                    <li className="left__menuItem">
                        <a href="index.html" className="left__title"><img src="assets/icon-dashboard.svg" alt />Dashboard</a>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="assets/icon-tag.svg" alt />Sản Phẩm<img className="left__iconDown" src="assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <a className="left__link" href="insert_product.html">Chèn Sản Phẩm</a>
                            <a className="left__link" href="view_product.html">Xem Sản Phẩm</a>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="assets/icon-edit.svg" alt />Danh Mục SP<img className="left__iconDown" src="assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <a className="left__link" href="insert_p_category.html">Chèn Danh Mục</a>
                            <a className="left__link" href="view_p_category.html">Xem Danh Mục</a>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="assets/icon-book.svg" alt />Thể Loại<img className="left__iconDown" src="assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <a className="left__link" href="insert_category.html">Chèn Thể Loại</a>
                            <a className="left__link" href="view_category.html">Xem Thể Loại</a>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="assets/icon-settings.svg" alt />Slide<img className="left__iconDown" src="assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <a className="left__link" href="insert_slide.html">Chèn Slide</a>
                            <a className="left__link" href="view_slides.html">Xem Slide</a>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="assets/icon-book.svg" alt />Coupons<img className="left__iconDown" src="assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <a className="left__link" href="insert_coupon.html">Chèn Coupon</a>
                            <a className="left__link" href="view_coupons.html">Xem Coupons</a>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <a href="view_customers.html" className="left__title"><img src="assets/icon-users.svg" alt />Khách Hàng</a>
                    </li>
                    <li className="left__menuItem">
                        <a href="view_orders.html" className="left__title"><img src="assets/icon-book.svg" alt />Đơn Đặt Hàng</a>
                    </li>
                    <li className="left__menuItem">
                        <a href="edit_css.html" className="left__title"><img src="assets/icon-pencil.svg" alt />Chỉnh CSS</a>
                    </li>
                    <li className="left__menuItem">
                        <div className="left__title"><img src="assets/icon-user.svg" alt />Admin<img className="left__iconDown" src="assets/arrow-down.svg" alt /></div>
                        <div className="left__text">
                            <a className="left__link" href="insert_admin.html">Chèn Admin</a>
                            <a className="left__link" href="view_admins.html">Xem Admins</a>
                        </div>
                    </li>
                    <li className="left__menuItem">
                        <a href className="left__title"><img src="assets/icon-logout.svg" alt />Đăng Xuất</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
