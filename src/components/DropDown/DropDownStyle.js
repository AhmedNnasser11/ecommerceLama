import { Link } from "react-router-dom";
import styled from "styled-components";



// Drop downmeny


export const ListItem = styled.li`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  &:first-of-type {
    margin-top: 5px;
    margin-bottom: 5px;
    & > a{
      color: #263548;
      font-weight: 700;
    }
  }
  &:hover {
  background-color: #f7f7f7;
  transition: 0.3s background-color ease-in-out;
}
`

// Dropdown Menu Links

export const CustomLinkDropDown = styled(Link)`
  text-decoration: none;
  color: #a8a8a8;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  transition: 0.3s background-color ease-in-out;
`;