import React, { useState } from "react";
import { CustomLink, ElementContainer } from "./SidebarElementStyle";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SidebarElement = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const shwoDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <ElementContainer>
      <div className="tabs__container">
        <CustomLink to={item.path}>{item.title}</CustomLink>

        {item.subNav ? (
          <IconButton onClick={() => shwoDropDown()}>
            {dropdown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        ) : null}
      </div>

      {item.subNav ? (
        <div className={`DropDownContainer ${dropdown ? "show" : ""}`}>
          <ul className="dropDown__ul">
            {item.subNav.map((item, index) => {
              return (
                <li key={index}>
                  <CustomLink to={item.path}>{item.title}</CustomLink>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </ElementContainer>
  );
};

export default SidebarElement;
