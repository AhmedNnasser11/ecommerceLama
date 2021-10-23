import React from "react";
import StepperComponent from "../../components/Stepper/Stepper";
import { CartContainer } from "./CartStyle";
import { Button, Container, Grid } from "@mui/material";
import CartProductDetail from "../../components/CartProductDetail/CartProductDetail";
import { ContinueShopping, CustomArrowRight, OurButtonGroup, UpDateCart } from "../../components/CartProductDetail/CartProductDetailStyle";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <CartContainer>
      <Container>
        <StepperComponent />
        <Grid container>
          <Grid item xs={12} md={7}>
            <CartProductDetail />
            <OurButtonGroup>
                <Link to='/'>
                    <ContinueShopping startIcon={<CustomArrowRight />} variant="outlined"> Continue shopping</ContinueShopping>
                </Link>
              <UpDateCart variant="contained">UpDate Cart</UpDateCart>
            </OurButtonGroup>
          </Grid>
          <Grid item xs={12} md={7}></Grid>
        </Grid>
      </Container>
    </CartContainer>
  );
};

export default Cart;
