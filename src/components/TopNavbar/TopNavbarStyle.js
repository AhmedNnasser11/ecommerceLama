import styled from "styled-components";
import { Container } from '@mui/material'
import { Link } from "react-router-dom";


export const TopNav = styled.nav`
    font-size: 13px;
    background-color: #F7F7F7;
`
export const CustomContainer = styled(Container)`
    height: 2rem;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 828px) {
        justify-content: center;
  }

`
export const RightLinks = styled.ul`
    list-style: none;
    display: flex;
    font-weight: 300;
    /* column-gap: 10px; */
    @media (max-width: 828px) {
    display: none;
  }
    li{
        border-right: 1px solid  #CDCDCD;
        padding-left: 10px ;
        padding-right: 10px;
        &:first-of-type{
            padding-left: 0;
        }
        &:last-of-type{
            border-right: none;
            padding-right: 0;
        }
    }
`

export const CustomLink = styled(Link)`
    color: #777777;
    text-decoration: none;
    font-weight: 400;
    transition: .3s color ease-in-out;
    :hover{
       color: rgba(17,17,17,.85);
       transition: .3s color ease-in-out;
    }
`


export const LeftLinks = styled.p`
    font-weight: 600;
    color: #777777;
    text-transform: uppercase;
    font-size: 12px;
    
   
`