import React from 'react'
import { Link } from 'react-router-dom';
import * as config from '../../Constants/Config'
export default function ProductItem(props) {
    let { product, index } = props;

    return (
        <tr>
            <td data-label="STT">{index}</td>
            <td data-label="Tên sản phẩm">{product.name}</td>
            <td data-label="Hình ảnh"><img src={`${config.BASE_URL}${product.thumbnailImage}`} alt='' /></td>
            <td data-label="Giá SP">{product.price}</td>
            <td data-label="Đã bán">{product.quantityOrder}</td>
            <td data-label="So Luong Ton">{product.stock}</td>
            <td data-label="Thời gian">{product.dateCreated}</td>
            <td data-label="Sửa" className="right__iconTable"><Link to><img src="/assets/icon-edit.svg" alt='' /></Link></td>
            <td data-label="Xoá" className="right__iconTable"><Link to><img src="/assets/icon-trash-black.svg" alt='' /></Link></td>
        </tr>
    )
}
