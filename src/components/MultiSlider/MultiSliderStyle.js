import styled from "styled-components";

export const SliderContainerBestSellers = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  overflow: hidden;
  .icons__container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    opacity: 0;
    transition: 0.3s all ease;
    z-index: 5;
    padding-left: 20px;
    padding-right: 20px;

    .MuiIconButton-root {
      background-color: transparent;
      transition: 0.3s all ease;
    }
    .MuiIconButton-root:hover {
      background-color: #b20000;
      transition: 0.3s all ease;
    }
    .MuiSvgIcon-root {
      color: #cdcdcd;
    }
  }
  .our__slide__bestSellars {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.6;
    overflow: hidden;
    &:hover .icons__container {
      opacity: 1;
      transition: 0.3s all ease;
    }
    &:hover .img__slider__bestSellars {
      filter: brightness(0.5);
      transition: 0.3s all ease;
    }
  }
  .img__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
    height: 215px;
  }
  .img__slider__bestSellars {
    width: 100%;
    max-height: 100%;
    min-height: 215px;
    text-align: center;
    transition: 0.3s all ease;
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
    @media (max-width: 480px) {
      width: 50%;
    }
  }
  .category__bestSellars {
    font-size: 13px;
    letter-spacing: 1px;
    color: #777;
  }

  .title__bestSellars {
    font-size: 13px;
    color: #334862;
  }
  .price__bestSellars {
    color: #111;
  }
  .info__bestSellars {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 480px) {
      padding-left: 114px;
      padding-right: 114px;
    }
  }
  .quick__view {
    width: 100%;
    height: 30px;
    font-size: 15px;
    position: absolute;
    bottom: -15%;
    color: #fff;
    background-color: #1e73be;
    text-align: center;
    transition: 0.3s all ease;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 480px) {
      width: 50%;
    }
  }
  .our__slide__bestSellars:hover .quick__view {
    bottom: 0;
    transition: 0.3s all ease;
  }

  .slick-prev:hover,
  .slick-next:hover {
    outline: none;
  }

  .slider__container__bestSellers:hover .slick-prev,
  .slider__container__bestSellers:hover .slick-next {
    opacity: 0.8;
    transition: 0.3s all ease;
  }

  .slider__container__bestSellers:hover .slick-prev {
    left: 0;
    transition: 0.3s all ease;
  }

  .slider__container__bestSellers:hover .slick-next {
    right: 0;
    transition: 0.3s all ease;
  }
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .slick-prev,
  .slick-next {
    border: 1px solid #fff;
    width: 35px;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    z-index: 10;
    background-color: #fff;
    top: 35%;
    opacity: 0;
  }

  .slick-prev {
    left: -5%;
    box-shadow: 6px 2px 5px -3px rgba(0, 0, 0, 0.32);
    transition: 0.3s all ease;
  }

  .slick-next {
    right: -5%;
    box-shadow: -5px 2px 5px -3px rgba(0, 0, 0, 0.32);
    transition: 0.3s all ease;
  }
`;
