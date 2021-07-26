import React from 'react'

function CategoryList(props) {
    return (
        <div>
            <div className="right__title">Bảng điều khiển</div>
            <p className="right__desc">Xem danh mục</p>
            <div className="right__table">
                <div className="right__tableWrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tiêu đề</th>
                                <th>Mô tả</th>
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

export default CategoryList
