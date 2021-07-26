import React from 'react'
import { Link, Route, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const menus = [
    {
        label: 'Dashboard',
        to: '/',
        exact: true,
        submenu: []
    },
    {
        label: 'Sản phẩm',
        to: '/admin/view-products',
        exact: false,
        submenu: [
            {
                label: "Chèn sản phẩm",
                to: '/admin/insert-product',
                exact: false
            },
            {
                label: "Xem sản phẩm",
                to: '/admin/view-products',
                exact: false
            }
        ]
    },
    {
        label: 'Danh mục sản phẩm',
        to: '/admin/view-',
        exact: false,
        submenu: [
            {
                label: "Chèn danh mục",
                to: '/admin/insert-product',
                exact: false
            },
            {
                label: "Xem danh mục",
                to: '/admin/view-products',
                exact: false
            }
        ]
    },
    // {
    //     label: 'Coupons',
    //     to: '/admin/view-coupons',
    //     exact: false,
    //     submenu: [
    //         {
    //             label: "Chèn coupons",
    //             to: '/admin/insert-product',
    //             exact: false
    //         },
    //         {
    //             label: "Xem coupons",
    //             to: '/admin/view-products',
    //             exact: false
    //         }
    //     ]
    // },
    // {
    //     label: 'Quản lý Admin',
    //     to: '/admin/view-',
    //     exact: false,
    //     submenu: [
    //         {
    //             label: "Chèn Admin",
    //             to: '/admin/insert-product',
    //             exact: false
    //         },
    //         {
    //             label: "Xem Admin",
    //             to: '/admin/view-products',
    //             exact: false
    //         }
    //     ]
    // },
    {
        label: 'Khách hàng',
        to: '/admin/view-customers',
        exact: false,
        submenu: []
    },
    {
        label: 'Đơn đặt hàng',
        to: '/admin/view-orders',
        exact: false,
        submenu: []
    }, {
        label: 'Đăng xuất',
        to: '#',
        exact: false,
        submenu: []
    },
]

// custom Link



export default function MenuSidebar() {
    const token = useSelector(state => state.isToken)
    const dispatch = useDispatch()
    const history = useHistory()
    function onLogout() {
        dispatch({ type: 'LOGOUT' })
        history.replace('/admin/login')
        console.log(token);
    }
    const MenuLink = ({ label, to, activeOnlyWhenExact, submenu }) => {
        return (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => {
                    let arr = [];
                    arr = submenu.map((sub, index) => {
                        return <Link key={index} className="left__link" to={sub.to} >{sub.label}</Link>
                    })
                    if (arr.length === 0) {
                        return to === '#' ? (<li className="left__menuItem">
                            <span className="left__title" onClick={onLogout}>
                                {label}
                            </span>
                        </li>) : (<li className="left__menuItem">
                            <Link to={to} className="left__title">
                                {label}
                            </Link>
                        </li>)
                    }
                    else {
                        return (
                            <li className="left__menuItem">
                                <div className="left__title">
                                    {label}
                                    <img className="left__iconDown" src="/assets/arrow-down.svg" alt='' />
                                </div>
                                <div className="left__text">
                                    {arr}
                                </div>
                            </li>
                        )
                    }

                }}
            />
        );
    }
    const showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        submenu={menu.submenu}
                    />
                );
            })
        }
        return result;
    }
    return (

        <div className="left">
            <span className="left__icon">

            </span>
            <div className="left__content">
                <div className="left__profile">
                    <div className="left__image"><img src="/assets/profile1.jpg" alt='' /></div>
                    <p className="left__name">Bùi Ngọc Tuấn</p>
                </div>
                <ul className="left__menu">
                    {showMenus(menus)}
                </ul>
            </div>
        </div>
    )
}
