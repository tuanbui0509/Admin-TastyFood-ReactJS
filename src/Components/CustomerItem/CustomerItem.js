import React from 'react'
import * as config from '../../Constants/Config'

function CustomerItem(props) {
    const { customer, index } = props
    return (
        <tr>
            <td data-label="STT">{index + 1}</td>
            <td data-label="Hình ảnh" style={{ textAlign: 'center' }}><img style={{ width: 50, height: 50, borderRadius: '100%', objectFit: 'cover' }} src={`${config.BASE_URL}${customer.avatar}`} alt='' /></td>
            <td data-label="Tên">{`${customer.firstName}  ${customer.lastName}`}</td>
            <td data-label="Email">{customer.email} </td>
            <td data-label="Phone">{customer.phoneNumber} </td>
            <td data-label="Địa chỉ">{customer.dob}</td> 
            <td data-label="Xoá" className="right__iconTable"><a href><img src="/assets/icon-trash-black.svg" alt='' /></a></td>
        </tr>
    )
}

export default CustomerItem
