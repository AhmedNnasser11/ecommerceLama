import React from 'react'
import { useSelector } from 'react-redux'
import { selectedProducts } from '../../features/products/ProductsSlice';
import SectionSlides from '../SectionSlides/SectionSlides';

const LatestSale = () => {

    const {products} = useSelector(selectedProducts)
    // const dispatch = useDispatch()
    // console.log(products)
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])

    return (
        <>
            <SectionSlides headTitle='Latest On Sale' products={products} navigateTo='/' speed={1000} scroll={3}/>
        </>
    )
}

export default LatestSale
