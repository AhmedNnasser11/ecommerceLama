import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "../../data.js";
import { Button } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { PrivateContainer } from "./CarouselStyle.js";

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos fontSize="small" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNew fontSize="small" />
    </div>
  );
};

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <PrivateContainer className="private__container">
      <div className="slider_container">
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <div key={item.id} className="our__slide">
              <img className="img__slider" src={item.img} alt={item.title} />
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Button variant="contained">BROWSE NOW</Button>
              </div>
              <div className="overlay"></div>
            </div>
          ))}
        </Slider>
      </div>
    </PrivateContainer>
  );
};

export default Carousel;
