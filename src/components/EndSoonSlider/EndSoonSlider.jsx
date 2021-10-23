import React from 'react'
import { useSelector } from 'react-redux'
import { selectedProducts } from '../../features/products/ProductsSlice';
import SectionSlides from '../SectionSlides/SectionSlides';

const EndSoonSlider = () => {

    const {products} = useSelector(selectedProducts)
    // const dispatch = useDispatch()
    // console.log(products)
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])

    return (
        <>
            <SectionSlides headTitle='End Soon' products={products} navigateTo='/' slideShow/>
        </>
    )
}

export default EndSoonSlider
