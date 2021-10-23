import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, selectedProducts } from '../../features/products/ProductsSlice';
import SectionSlides from '../SectionSlides/SectionSlides';

const BestSellers = () => {

    const {products} = useSelector(selectedProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    return (
        <>
            <SectionSlides headTitle='Best Sellers' products={products} navigateTo='/'/>
        </>
    )
}

export default BestSellers
