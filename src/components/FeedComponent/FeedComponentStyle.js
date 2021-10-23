import styled from "styled-components";
import { Link } from "react-router-dom";



export const  FeedComponentContainer = styled.section`

    ul{
        list-style: none;
        li{
            padding-bottom: 10px;
            padding-top: 10px;
            border-bottom: 1px solid #DDD;
            &::last-of-type{
                border-bottom: none;
            }
        }
    }
    .link__container{
        color: #334862;
        display: flex;
        align-items: center;
        .img__container{
            width: 80px;
            height: 60px;

            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
       
       
    }
`

export const Title = styled.h3`
 color: #595959;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 10px;
`

export const Info = styled.div`
    line-height: 1.7;
`
export const TitleProduct = styled.p``

export const Price = styled.span`
     color: #000;
            font-weight: 600;
`

export const CustomLink = styled(Link)`
    text-decoration: none;
`