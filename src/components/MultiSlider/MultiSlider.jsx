import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";
import { SliderContainerBestSellers } from "./MultiSliderStyle";


import Item from "./Item";

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

const MultiSlider = ({ data, slideShow, speed ,scroll }) => {


  const settings = {
    infinite: true,
    speed: speed ? speed : 500,
    slidesToShow: !slideShow ? 5 : 4,
    slidesToScroll: scroll ? scroll : 3 ,
    autoplay: true,
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
          {data.map((item) => {
            return (
             <Item item={item} />
            );
          })}
        </Slider>
      </div>
    </SliderContainerBestSellers>
  );
};

export default MultiSlider;
