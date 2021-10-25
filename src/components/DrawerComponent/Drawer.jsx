import React, { useState } from "react";
import {
  CustomSearch,
  CustomSearchInput,
  DrawerContainer,
  SearchAndOption,
  Select,
  SideBar,
  ThisListItem,
} from "./DrawerStyle";
import {
  Menu,
  Close,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SidebarElement from "./SidebarElement/SidebarElement";
import { SidebarData } from "../sidebarData";

const Drawer = () => {

  const [sidebar, setSidebar] = useState(false)

  const HandleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <DrawerContainer>
      {!sidebar ? (
        <IconButton className="menuIcon" onClick={() => HandleClick()}>
          <Menu fontSize="medium" />
          Menu
        </IconButton>
      ) : (
        <IconButton className="menuIcon"  onClick={() => HandleClick()} >
          <Close fontSize="medium" />
        </IconButton>
      )}
      <SideBar>
        <ThisListItem className={!sidebar?'': 'active'}>
          <li className="SearchAndOption">
            <SearchAndOption>
              <Select id="catigoris">
                <option value="All">All</option>
                <option value="Bags">Bags</option>
                <option value="Clothing">Clothing</option>
                <option value="Shoes">Shoes</option>
              </Select>
              <CustomSearchInput placeholder="Search..." type="search" />
              <CustomSearch />
            </SearchAndOption>
          </li>
          {SidebarData.map((item, index) => {
              return <SidebarElement key={index} item={item} HandleClick={HandleClick}/>;
            })}
          
        </ThisListItem>
      </SideBar>
    </DrawerContainer>
  );
};

export default Drawer;
