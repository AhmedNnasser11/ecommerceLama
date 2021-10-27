import React, { useEffect, useState } from "react";
import {
  ShoppingBasket,
  FavoriteBorder,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import {
  addToCart,
  likeItFunc,
  selectedProducts,
} from "../../features/products/ProductsSlice";
import {Done, DoneBg} from './ItemStyle'

const Item = ({ item }) => {
  const [isExit, setIsExit] = useState(false);
  const dispatch = useDispatch();
  const { productCounter } = useSelector(selectedProducts);
  const { user } = useSelector(selectedProducts);
  const { cart } = useSelector(selectedProducts);

  useEffect(() => {
    const GitItem = cart.find((el) => (el.id === item.id));
    if (GitItem) {
      setIsExit(true)
    }else{
      return
    }
  }, [cart, item.id]);

  return (
    <div key={item.id} className="our__slide__bestSellars">
      <Link className="img__wrapper" to={`/products/${item.id}`}>
        <img
          className="img__slider__bestSellars"
          src={item.image}
          alt={item.title}
        />
        <p className="quick__view">QUICK VIEW</p>
        <div className="icons__container">
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                likeItFunc({
                  productId: item.id,
                  userId: user.id,
                })
              );
            }}
          >
            <FavoriteBorder />
          </IconButton>

          {!isExit ? (
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    category: item.category,
                    image: item.image,
                    quantity: productCounter,
                  })
                );
              }}
            >
              <ShoppingBasket />
            </IconButton>
          ) : (
              <DoneBg onClick={(e) => e.preventDefault()}>
              <Done />
              </DoneBg>
          )}
        </div>
      </Link>
      <div className="info__bestSellars">
        <h3 className="category__bestSellars">{item.category}</h3>
        <h4 className="title__bestSellars">{item.title}</h4>
        <span className="price__bestSellars">${item.price}</span>
      </div>
    </div>
  );
};

export default Item;
