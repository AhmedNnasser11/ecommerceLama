import { Search, Favorite, Person, ShoppingBasket } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const SearchSectionContainer = styled.div`
.MuiBadge-badge{
    background-color: #188490 !important;
    color: #FFF !important;
}
`
export const CustomContainer = styled(Container)`
    height: 5rem;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
`
export const CustomSearch = styled(Search)`
    position: absolute;
    right: 0;
    left: 93%;
    top: 10%;
    bottom: 0;
    color: #777777;
    @media (max-width: 828px) {
    display: none;
  }
`
export const CustomSearchInput = styled.input`
    flex-grow: 1;
    height: 100%;
    border: 1px solid #CDCDCD;
    outline: none;
    border-top-right-radius: 99px;
    border-bottom-right-radius: 99px;
    border-top-left-radius: 99px;
    border-bottom-left-radius: 99px;
    background-color: rgba(0,0,0,.03);
    padding: 0 .75em;
    color: #777777;
    @media (max-width: 828px) {
    display: none;
  }
`
export const Logo = styled.span`
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    @media (max-width: 828px) {
    margin: 0 auto;
    font-size: 20px;
  }
`
export const SearchAndOption = styled.div`
    height: 33px;
    flex-grow: .7;
    display: flex;
    column-gap: 5px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 828px) {
    display: none;
  }
`
export const Select = styled.select`
    height: 100%;
    width: auto;
    color: #777777;
    background-color: rgba(0,0,0,.03);
    border: 1px solid #CDCDCD;
    text-align: center;
    border-bottom-right-radius: 99px;
    border-top-right-radius: 99px;
    border-bottom-left-radius: 99px;
    border-top-left-radius: 99px;
    cursor: pointer;
`
export const IconsButtonGroup = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const CustomFavorite = styled(Favorite)``
export const CustomPerson = styled(Person)``
export const CustomShoppingBasket = styled(ShoppingBasket)``
