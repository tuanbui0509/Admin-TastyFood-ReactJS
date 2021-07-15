import React from 'react'
import { Link } from 'react-router-dom';
export default function ProductItem() {
    return (
        <tr>
            <td data-label="STT">1</td>
            <td data-label="Tên sản phẩm">Dada Dress</td>
            <td data-label="Hình ảnh"><img src="/images/product1.jpg" alt /></td>
            <td data-label="Giá SP">590.000 ₫</td>
            <td data-label="Đã bán">1</td>
            <td data-label="Từ khoá">dress, vay</td>
            <td data-label="Thời gian">2020-07-13 21:31:05</td>
            <td data-label="Sửa" className="right__iconTable"><a href><img src="/assets/icon-edit.svg" alt /></a></td>
            <td data-label="Xoá" className="right__iconTable"><a href><img src="/assets/icon-trash-black.svg" alt /></a></td>
        </tr>
    )
}
