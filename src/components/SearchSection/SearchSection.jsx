import React, { useEffect } from "react";
import { Badge} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  selectedProducts,
} from "../../features/products/ProductsSlice";
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
  const { likeIt } = useSelector(selectedProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
          <CustomSearchInput placeholder="Search..." type="search" />
          <CustomSearch />
        </SearchAndOption>

        <IconsButtonGroup>
          <li>
            <Badge badgeContent={likeIt?.length}>
              <CustomLink to="#">
                <CustomFavorite />
              </CustomLink>
            </Badge>
          </li>
          <li>
            <CustomLink to="#">
              <CustomPerson />
            </CustomLink>
          </li>

          <li>
          <CustomLink to="/cart">

            <Badge badgeContent={cart?.length}>
                <CustomShoppingBasket />
            </Badge> 
            </CustomLink>
          
          </li>
        </IconsButtonGroup>
      </CustomContainer>
    </SearchSectionContainer>
  );
};

export default SearchSection;
