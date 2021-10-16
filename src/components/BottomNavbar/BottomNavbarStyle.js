import { ArrowDropUp } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

//>>>>>>>> Bottom Navbar Container <<<<

export const BottomNavbarContainer = styled.nav`
  background-color: #1e73be;

  @media (max-width: 828px) {
    display: none;
  }
`;

export const CustomContainer = styled(Container)`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;

export const CustomArrow = styled(ArrowDropUp)`
  position: absolute;
  top: -26px;
  left: 0;
  bottom: 0;
  color: #fff;
`;

//>>>>> Drop Down Menu Container <<<<<

export const DropDownMenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 45px;
  bottom: 0;
  right: 0;
  left: 0;
  width: 450px;
  height: 400px;
  z-index: 999 !important;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: none;
  ${(props) =>
    !props.bg
      ? "background-color: #FFFFFF;"
      : `
    background-image: linear-gradient(rgba(255, 243, 243, 0.2), rgba(255, 243, 243, 0.2)) ,url(${props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    `}
`;

// >>>> Left Links <<<<
export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.8rem;
  & > li {
    position: relative;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:hover > .home__dropdown {
      display: flex !important;
    }
  }
`;

export const DropDownMenu = styled.ul`
  list-style: none;
  border-right: 2px solid #f7f7f7;
  width: 100%;
  height: 100%;
  &:last-of-type {
    border-right: none;
  }
`;

// >>> Main Links <<<<

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 0.9em;
  font-weight: 700;
  width: 100%;
  height: 2.8rem;
  padding-left: 5px;
  padding-right: 5px;
  transition: 0.3s background-color ease-in-out;
  &:hover {
    background-color: #11519b;
    transition: 0.3s background-color ease-in-out;
  }
`;

export const AddressSection = styled.address``;
export const NavLinksAddress = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #ffffff;
  li {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.8em;
    column-gap: 5px;
    &:last-of-type {
      column-gap: 0px;
    }
    .MuiSvgIcon-root {
      font-size: 1.3rem;
    }
  }
`;
