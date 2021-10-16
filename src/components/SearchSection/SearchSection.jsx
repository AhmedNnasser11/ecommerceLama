import React from "react";
import Drawer from "../DrawerComponent/Drawer";
import {
  SearchSectionContainer,
  CustomContainer,
  Logo,
  SearchAndOption,
  CustomSearch,
  IconsButtonGroup,
  CustomFavorite,
  CustomPerson,
  CustomShoppingBasket,
  CustomLink,
  CustomSearchInput,
  Select,
} from "./SearchSectionStyle";

const SearchSection = () => {
  return (
    <SearchSectionContainer>
      <CustomContainer>
        <Drawer />
        <Logo>FakeStore</Logo>
        <SearchAndOption>
          <Select id="catigoris">
            <option value="All">All</option>
            <option value="Bags">Bags</option>
            <option value="Clothing">Clothing</option>
            <option value="Shoes">Shoes</option>
          </Select>
          <CustomSearchInput placeholder='Search...' type="search" />
          <CustomSearch />
        </SearchAndOption>

        <IconsButtonGroup>
          <li>
            <CustomLink>
              <CustomFavorite />
            </CustomLink>
          </li>
          <li>
            <CustomLink>
              <CustomPerson />
            </CustomLink>
          </li>

          <li>
            <CustomLink>
              <CustomShoppingBasket />
            </CustomLink>
          </li>
        </IconsButtonGroup>
      </CustomContainer>
    </SearchSectionContainer>
  );
};

export default SearchSection;
