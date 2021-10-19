import React from "react";

import { SideBar, SidebarContainer, ThisListItem } from "./SidebarStyle";
import { SidebarData } from "../../../components/sidebarData";
import SidebarElement from "../../../components/DrawerComponent/SidebarElement/SidebarElement";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideBar>
        <ThisListItem>
          {SidebarData.map((item, index) => {
              return <SidebarElement key={index} item={item}/>;
            })}
          
        </ThisListItem>
      </SideBar>
    </SidebarContainer>
  );
};

export default Sidebar;
