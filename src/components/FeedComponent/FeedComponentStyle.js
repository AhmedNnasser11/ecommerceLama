import styled from "styled-components";
import { Link } from "react-router-dom";



export const  FeedComponentContainer = styled.section`
h3{
    color: #595959;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 10px;
}
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
        .info{
            line-height: 1.7;
        }
       
        .price{
            color: #000;
            font-weight: 600;
        }
    }
`

export const CustomLink = styled(Link)`
    text-decoration: none;
`