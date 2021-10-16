import {
  AccessTime,
  KeyboardArrowDown,
  MailOutline,
  Phone,
} from "@mui/icons-material";
import React from "react";
import DropDown from "../DropDown/DropDown";
import {
  BottomNavbarContainer,
  CustomContainer,
  NavLinks,
  CustomLink,
  AddressSection,
  NavLinksAddress,
  DropDownMenu,
  DropDownMenuContainer,
  CustomArrow,
} from "./BottomNavbarStyle";

const BottomNavbar = () => {
  return (
    <BottomNavbarContainer>
      <CustomContainer>
        <NavLinks>
          <li>
            <CustomLink to="/">
              HOME <KeyboardArrowDown />
            </CustomLink>
            <DropDownMenuContainer className="home__dropdown">
              <CustomArrow style={{ fontSize: 45 }} />
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
            </DropDownMenuContainer>
          </li>
          <li>
            <CustomLink to="/">
              FEATURES <KeyboardArrowDown />
            </CustomLink>
            <DropDownMenuContainer className="home__dropdown" bg="/images/modal.jpg">
              <CustomArrow style={{ fontSize: 45 }} />
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
            </DropDownMenuContainer>
          </li>
          <li>
            <CustomLink to='/'>
              SHOP <KeyboardArrowDown />
            </CustomLink>
            <DropDownMenuContainer className="home__dropdown">
              <CustomArrow style={{ fontSize: 45 }} />
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
            </DropDownMenuContainer>
          </li>
          <li>
            <CustomLink to="/">
              PAGES <KeyboardArrowDown />
            </CustomLink>
            <DropDownMenuContainer className="home__dropdown">
              <CustomArrow style={{ fontSize: 45 }} />
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
              <DropDownMenu>
                <DropDown LinkName="SHOP" NavigateTo="/" />
                <DropDown LinkName="SHOP 1" NavigateTo="/" />
                <DropDown LinkName="SHOP 2" NavigateTo="/" />
                <DropDown LinkName="SHOP 3" NavigateTo="/" />
                <DropDown LinkName="SHOP 4" NavigateTo="/" />
                <DropDown LinkName="SHOP 5" NavigateTo="/" />
                <DropDown LinkName="SHOP 6" NavigateTo="/" />
                <DropDown LinkName="SHOP 7" NavigateTo="/" />
              </DropDownMenu>
            </DropDownMenuContainer>
          </li>
          <li>
            <CustomLink to="/">BLOG</CustomLink>
          </li>
          <li>
            <CustomLink to="/">ELEMENTS</CustomLink>
          </li>
        </NavLinks>
        <AddressSection>
          <NavLinksAddress>
            <li>
              <MailOutline /> <span> CONTACT</span>
            </li>
            <li>
              <AccessTime /> <span> 08:00 - 17:00</span>
            </li>
            <li>
              <Phone />
              <span>+47 900 99 000</span>
            </li>
          </NavLinksAddress>
        </AddressSection>
      </CustomContainer>
    </BottomNavbarContainer>
  );
};

export default BottomNavbar;
