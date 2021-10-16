import React from "react";
import {
  LeftLinks,
  RightLinks,
  TopNav,
  CustomContainer,
  CustomLink,
} from "./TopNavbarStyle";

const TopNavbar = () => {
  return (
    <TopNav>
      <CustomContainer>
        <LeftLinks>Add anything here or just remove it....</LeftLinks>
        <RightLinks>
          <li>
            <CustomLink>About</CustomLink>
          </li>
          <li>
            <CustomLink>Our Stores</CustomLink>
          </li>
          <li>
            <CustomLink>Blog</CustomLink>
          </li>
          <li>
            <CustomLink>Context</CustomLink>
          </li>
          <li>
            <CustomLink>FAQ</CustomLink>
          </li>
          <li>
            <CustomLink>Newsletter</CustomLink>
          </li>
        </RightLinks>
      </CustomContainer>
    </TopNav>
  );
};

export default TopNavbar;
