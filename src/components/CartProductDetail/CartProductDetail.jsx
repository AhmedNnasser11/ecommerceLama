import React from "react";
import {
  CartProductDetailContainer,
  Price,
  Product,
  ProductInfo,
  Quantity,
  Subtotal,
  TitleContainer,
 
} from "./CartProductDetailStyle";
import ProductSellInfoComponent from "./ProductSellInfo/ProductSellInfo";

const CartProductDetail = () => {

  return (
    <CartProductDetailContainer>
      <TitleContainer>
        <Product>Product</Product>
        <ProductInfo>
          <Price>Price</Price>
          <Quantity>Quantity</Quantity>
          <Subtotal>Subtotal</Subtotal>
        </ProductInfo>
      </TitleContainer>

      {/* start ProductInfoContainer */}
        <ProductSellInfoComponent />

      {/* end ProductInfoContainer */}
    </CartProductDetailContainer>
  ); 
};

export default CartProductDetail;