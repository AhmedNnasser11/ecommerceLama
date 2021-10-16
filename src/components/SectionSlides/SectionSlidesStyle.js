import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BestSellersContainer = styled.section`
    .title__link{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #DDD;
        padding-bottom: 10px;
        h3{
            text-transform: uppercase;
            color: #595959;
            font-weight: bold;
        }
    }
    .line{
        color: gray;
    }
`

export const CustomLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #334862;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    &:hover{
        color: #232323;
    }
`