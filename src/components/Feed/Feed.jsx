import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProductsMan, getProductsWomen, selectedProducts } from '../../features/products/ProductsSlice'
import FeedComponent from '../FeedComponent/FeedComponent'

const Feed = () => {

    const {manClothes} = useSelector(selectedProducts)
    const {womanClothes} = useSelector(selectedProducts)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProductsMan())
      dispatch(getProductsWomen())
    }, [dispatch])


    return (
        <FeedContainer>
            <Container className='custom__container'>
            <FeedGridContainer container spacing='10'>
                <Grid item xs={12} md={3}>
                    <FeedComponent title='Latest' data={manClothes} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <FeedComponent title='Best Selling' data={womanClothes}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <FeedComponent title='Featured' data={manClothes} navigateTo='/'/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <FeedComponent title='Top rated products' data={womanClothes} />
                </Grid>
            </FeedGridContainer>
            </Container>
        </FeedContainer>
    )
}

export default Feed

const FeedContainer = styled.section`
    
 
`

const FeedGridContainer = styled(Grid)`
 border-top: 1px solid #DDD;
    padding-top: 20px;
`