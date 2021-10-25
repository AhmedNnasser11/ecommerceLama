import React from "react";
import StepperComponent from "../../components/Stepper/Stepper";
import { CartContainer } from "./CartStyle";
import { Container, Grid } from "@mui/material";
import CartProductDetail from "../../components/CartProductDetail/CartProductDetail";
import { ContinueShopping, CustomArrowRight, OurButtonGroup, UpDateCart } from "../../components/CartProductDetail/CartProductDetailStyle";
import { Link } from "react-router-dom";
import CartTotal from "../../components/CartTotal/CartTotal";
import Feed from '../../components/Feed/Feed'
import Footer from '../../components/Footer/Footer'
const Cart = () => {
  return (
    <CartContainer>
      <Container>
        <StepperComponent />
        <Grid container style={{  marginBottom: '44px'}}>
          <Grid item xs={12} md={7}>
            <CartProductDetail />
            <OurButtonGroup>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <ContinueShopping startIcon={<CustomArrowRight />} variant="outlined" className='continue__shopping'> Continue shopping</ContinueShopping>
                </Link>
              <UpDateCart variant="contained">UpDate Cart</UpDateCart>
            </OurButtonGroup>
          </Grid>
          <Grid item xs={12} md={5}>
            <CartTotal />
          </Grid>
        </Grid>
        <Feed />
      </Container>
      <Footer />
    </CartContainer>
  );
};

export default Cart;
