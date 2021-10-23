import React from 'react'
import { useSelector } from 'react-redux'
import { selectedProducts } from '../../features/products/ProductsSlice';
import SectionSlides from '../SectionSlides/SectionSlides';

const RelatedProducts = () => {

    const {products} = useSelector(selectedProducts)
    // const dispatch = useDispatch()
    // console.log(products)
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])

    return (
        <>
            <SectionSlides headTitle='Related Products' products={products} navigateTo='/' slideShow/>
        </>
    )
}

export default RelatedProducts
