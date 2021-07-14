import React from 'react'

export default function ViewCustomersPage() {
    return (
        <>
            <div>
                <div className="right__title">Bảng điều khiển</div>
                <p className="right__desc">Xem sản phẩm</p>
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
                                    <th>Địa chỉ</th>
                                    <th>Xoá</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="STT">1</td>
                                    <td data-label="Hình ảnh" style={{ textAlign: 'center' }}><img style={{ width: 50, height: 50, borderRadius: '100%', objectFit: 'cover' }} src="/assets/profile1.jpg" alt /></td>
                                    <td data-label="Tên">dangthimydung</td>
                                    <td data-label="Email">dangthimydung@gmail.com</td>
                                    <td data-label="Phone">0836730193</td>
                                    <td data-label="Địa chỉ">Cà Mau</td>
                                    <td data-label="Xoá" className="right__iconTable"><a href><img src="/assets/icon-trash-black.svg" alt /></a></td>
                                </tr>
                                <tr>
                                    <td data-label="STT">1</td>
                                    <td data-label="Hình ảnh" style={{ textAlign: 'center' }}><img style={{ width: 50, height: 50, borderRadius: '100%', objectFit: 'cover' }} src="/assets/profile.jpg" alt /></td>
                                    <td data-label="Tên">chibaosinger</td>
                                    <td data-label="Email">chibaosinger@gmail.com</td>
                                    <td data-label="Phone">0836730193</td>
                                    <td data-label="Địa chỉ">Cà Mau</td>
                                    <td data-label="Xoá" className="right__iconTable"><a href><img src="/assets/icon-trash-black.svg" alt /></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
