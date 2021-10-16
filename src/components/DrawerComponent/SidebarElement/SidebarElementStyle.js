import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ElementContainer = styled.li`
display: flex;
flex-direction: column;
.tabs__container{
    width: 100%;
    height: 70px;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
}
.DropDownContainer{
    width: 100%;
    height: 100%;
    display: none;
    &.show{
        display: block;
    }
    li{
    width: 100%;
    height: 70px;
    display: flex;
    padding-left: 30px;
    padding-right: 20px;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    }
}
`

export const CustomLink = styled(Link)`
width: 100%;
height: 100%;
display: flex;
align-items: center;
    text-decoration: none;
    color: rgba(102, 102, 102, 0.85);
    transition: .3s all ease;
    &:hover{
        color: #000;
    }
`