import { Badge } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, selectedProducts } from "../../features/products/ProductsSlice";
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

  const { cart } = useSelector(selectedProducts);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
    
  }, [dispatch])
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
          <Badge badgeContent={cart.length}>
            <CustomLink to='#'>
              <CustomShoppingBasket />
            </CustomLink>
            </Badge>
          </li>
        </IconsButtonGroup>
      </CustomContainer>
    </SearchSectionContainer>
  );
};

export default SearchSection;
