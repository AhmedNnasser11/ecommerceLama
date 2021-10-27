import { Container } from '@mui/material'
import React from 'react'
import {KeyboardArrowRight} from '@mui/icons-material';
import { BestSellersContainer, CustomLink } from './SectionSlidesStyle';
import MultiSlider from '../MultiSlider/MultiSlider'

const SectionSlides = ( props ) => {

    return (
        <BestSellersContainer>
            <Container>
                <div className="title__link">
                    <h3>{props.headTitle}</h3>
                    <CustomLink to={props.navigateTo}>BROWSE All <KeyboardArrowRight /></CustomLink>
                </div>
                <MultiSlider data={props.products} slideShow={props.slideShow} speed={props.speed} scroll={props.scroll}/>
            </Container>
        </BestSellersContainer>
    )
}

export default SectionSlides
