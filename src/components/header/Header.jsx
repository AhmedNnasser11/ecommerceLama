import { Button, Container, Grid } from "@mui/material";
import React from "react";
import Carousel from "../Carousel/Carousel";
import { DeadLineProduct, HeaderContainer, Info, SummerOffer } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        {/* start Grid container */}
        <Grid container spacing={2}>
          {/* left slider */}
          <Grid item xs={12} md={8}>
            <Carousel />
          </Grid>
          

          {/* start right box */}
          <Grid item xs={12} md={4}>
            {/* start grid container */}
            <Grid container spacing={2}>
            {/* grid one */}
            <Grid item xs={12}>
              <DeadLineProduct>
                <img src="/images/selsendSoon.jpg" alt="Sale ends soon" />
                <Info>
                  <h2>Sale ends soon</h2>
                  <Button variant="contained">BROWSE NOW</Button>
                </Info>
                <div className="overlay"></div>
              </DeadLineProduct>
            </Grid>
            {/* grid tow */}
            <Grid item xs={12}>
            <SummerOffer>
                <img src="/images/summer.jpg" alt="SUMMER SALE"/>
                <Info>
                  <h2>SUMMER SALE</h2>
                  <Button variant="contained">BROWSE NOW</Button>
                </Info>
                <div className="overlay"></div>
              </SummerOffer>
            </Grid>
            </Grid>
            {/* end grid container */}
            </Grid>
          {/* end right box */}
        </Grid>
        {/* end Grid container */}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
