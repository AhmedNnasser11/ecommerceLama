import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  cleanUpproductDetails,
  decrement,
  getProductsDetail,
  increment,
  selectedProducts,
  addToCart,
} from "../../features/products/ProductsSlice";
import Sidebar from "./Sidebar/Sidebar";
import {
  AddToCart,
  CustomButton,
  CustomSideBarGrid,
  ViewDetailsContainer,
} from "./ViewDetailsStyle";
import {
  AddRounded,
  RemoveRounded,
  AddShoppingCart,
} from "@mui/icons-material";

const ViewDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails } = useSelector(selectedProducts);
  const { productCounter } = useSelector(selectedProducts);
  const { cart } = useSelector(selectedProducts);

  useEffect(() => {
    dispatch(getProductsDetail(`products/${id}`));
    return () => {
      dispatch(cleanUpproductDetails());
    };
  }, [dispatch, id]);

  return (
    <ViewDetailsContainer>
      <Container>
        <Grid container spacing={2}>
          <CustomSideBarGrid item xs={3}>
            <Sidebar />
          </CustomSideBarGrid>
          <Grid item xs={4}>
            <img src={productDetails.image} className="img__detail" />
          </Grid>
          <Grid item xs={5}>
            <h3>{productDetails.title}</h3>
            <p>${productDetails.price}</p>
            <article>{productDetails.description}</article>
            <div className="count__button">
              <div className="count">
                <CustomButton
                  size="small"
                  onClick={() => dispatch(increment())}
                >
                  <AddRounded />
                </CustomButton>
                <span className="number">{productCounter}</span>
                <CustomButton
                  size="small"
                  onClick={() => dispatch(decrement())}
                >
                  <RemoveRounded />
                </CustomButton>
              </div>
              <div className="add__to__cart">
                <AddToCart
                  variant="contained"
                  startIcon={<AddShoppingCart />}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        productId: id,
                        userId: cart.userId,
                        quantity: productCounter,
                      })
                    )
                  }
                >
                  ADD TO CART
                </AddToCart>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </ViewDetailsContainer>
  );
};

export default ViewDetails;
