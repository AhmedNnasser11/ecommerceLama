import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  getProductsCartDetail,
} from "../../../features/products/ProductsSlice";
import {
  ProductInfoContainer,
  Product,
  CustomButton,
  Number,
  Price,
  ProductSellInfo,
  QuantityEdite,
  Subtotal,
  XAndImg,
  Delete,
  IamgeContainer,
  Image,
  Title,
  CloseIcon
} from "../CartProductDetailStyle";

const ProductSellInfoComponent = (props) => {
  const { productCartDetails } = useSelector(selectedProducts);


  return (
    <>
      {productCartDetails.map((item) => (

      <ProductInfoContainer key={item.id}>
        <Product>
          <XAndImg>
            <Delete>
              <CloseIcon />
            </Delete>
            <IamgeContainer>
              <Image src={item.image} />
            </IamgeContainer>
            <Title>{item.title.substr(1, 13)}...</Title>
          </XAndImg>
        </Product>
        <ProductSellInfo>
          <Price>{item.price}</Price>
          <QuantityEdite>
            <CustomButton size="small">
              <AddRounded style={{ fontSize: "12px" }} />
            </CustomButton>
            <Number>{props.quantity}</Number>
            <CustomButton size="small">
              <RemoveRounded style={{ fontSize: "12px" }} />
            </CustomButton>
          </QuantityEdite>
          <Subtotal>$33</Subtotal>
        </ProductSellInfo>
      </ProductInfoContainer>

      ))}
    </>
  );
};

export default ProductSellInfoComponent;
