import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import CategoryList from '../../Components/CategoryList/CategoryList'
import apiCaller from '../../Utils/apiCaller'
export default function ViewCategoriesPage() {
    const categories = useSelector(state => state.categories )
    const dispatch = useDispatch()
    const history = useHistory();

    const fetchP = async () => {
        try {
            const res = await apiCaller('categories ', 'GET', null);
            // console.log(res.data);
            dispatch({ type: 'FETCH_CATEGORIES', categories: res.data })
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchP()
    }, [])
    const showCategory = () => {
        let result = null
        if (categories.length > 0) {
            result = categories.map((category, index) => {
                return (
                    <CategoryItem
                        key={index}
                        category={category}
                        index={index}
                    />
                )
            })
        }
        return result
    }
    return (
        <>
            <CategoryList >{showCategory()}</CategoryList>
        </>
    )
}
