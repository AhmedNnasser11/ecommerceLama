import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  ShoppingBasket,
  FavoriteBorder,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { SliderContainerBestSellers } from "./MultiSliderStyle";
import { IconButton } from "@mui/material";

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

const MultiSlider = ({ data, slideShow }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: !slideShow ? 5 : 4,
    slidesToScroll: 4,
    // autoplay: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainerBestSellers>
      <div className="slider__container__bestSellers">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="our__slide__bestSellars">
              <Link className="img__wrapper" to="/">
                <img
                  className="img__slider__bestSellars"
                  src={item.image}
                  alt={item.title}
                />
                <p className="quick__view">QUICK VIEW</p>
                <div className="icons__container">
                  <IconButton>
                    <FavoriteBorder />
                  </IconButton>

                  <IconButton>
                    <ShoppingBasket />
                  </IconButton>
                </div>
              </Link>
              <div className="info__bestSellars">
                <h3 className="category__bestSellars">{item.category}</h3>
                <h4 className="title__bestSellars">{item.title}</h4>
                <span className="price__bestSellars">${item.price}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </SliderContainerBestSellers>
  );
};

export default MultiSlider;
