import { CardTravelRounded } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
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
  const { user } = useSelector(selectedProducts);
  const { cart } = useSelector(selectedProducts);
  const { likeIt } = useSelector(selectedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    const userId = user.id;
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [user]);

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
            <Badge badgeContent={likeIt.length || 0}>
              <CustomLink>
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
            <Badge badgeContent={cart.length ? cart.length + 1 : 0}>
              <CustomLink to="/cart">
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
