import React from 'react'
import * as config from '../../Constants/Config'

function CategoryItem(props) {
    const {category,index} = props
    return (
        <tr>
            <td data-label="STT">{index+1}</td>
            <td data-label="Tiêu đề">{category.name}</td>
            <td data-label="Mô tả">{category.desciption}</td>
            <td data-label="Sửa" className="right__iconTable"><a href><img src="/assets/icon-edit.svg" alt='' /></a></td>
            <td data-label="Xoá" className="right__iconTable"><a href><img src="/assets/icon-trash-black.svg" alt='' /></a></td>
        </tr>
    )
}

export default CategoryItem
