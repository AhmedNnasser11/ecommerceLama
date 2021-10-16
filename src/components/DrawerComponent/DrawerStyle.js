import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DrawerContainer = styled.div`
  .menuIcon {
    width: 50px;
    display: flex;
    align-items: center;
    column-gap: 4;
    color: rgba(102, 102, 102, 0.85);
    cursor: pointer;
    font-size: 1em;
    transition: 0.3s color ease;
    &:hover {
      color: #000;
      transition: 0.3s color ease;
      background-color: transparent;
    }
  }
  @media (min-width: 828px) {
    display: none;
  }
`;

export const SideBar = styled.div`
  position: relative;
`;

export const ThisListItem = styled.ul`
  position: absolute;
  top: 0;
  left: -30%;
  background-color: #f7f7ff;
  z-index: 999;
  width: 350px;
  height: 100vh;
  list-style: none;
  transform: translateX(-100vw);
  transition: .3s transform ease;
  margin-top: 80%;
  &.active{
    transform: translateX(0) !important;
    transition: .3s transform ease;
  }
    li {
    display: flex;
    align-items: center;
  }
  .SearchAndOption{
    padding: 20px;
    width: 100%;
    height: 70px;
  }
`;

export const CustomSearchInput = styled.input`
  height: 100%;
  border: 1px solid #cdcdcd;
  outline: none;
  border-top-right-radius: 99px;
  border-bottom-right-radius: 99px;
  border-top-left-radius: 99px;
  border-bottom-left-radius: 99px;
  background-color: rgba(0, 0, 0, 0.03);
  padding: 0 0.75em;
  color: #777777;
  width: 200px;
`;
export const CustomSearch = styled(Search)`
  position: absolute;
  right: 0;
  left: 90%;
  top: 10%;
  bottom: 0;
  color: #777777;
`;
export const SearchAndOption = styled.div`
  height: 33px;
  display: flex;
  column-gap: 5px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right: 10px;
`;

export const Select = styled.select`
  height: 100%;
  width: auto;
  color: #777777;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid #cdcdcd;
  text-align: center;
  border-bottom-right-radius: 99px;
  border-top-right-radius: 99px;
  border-bottom-left-radius: 99px;
  border-top-left-radius: 99px;
  cursor: pointer;
`;

