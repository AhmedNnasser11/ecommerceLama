import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteCartProduct,
  selectedProducts,
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
  CloseIcon,
  QutityAndPrice,
  ResponsiveContainer
} from "../CartProductDetailStyle";

const ProductSellInfoComponent = () => {
  const { cart } = useSelector(selectedProducts);

  const dispatch = useDispatch()


  return (
    <>
      {cart.map((item) => (
        
      <ProductInfoContainer key={item.id}>
        <Product>
          <XAndImg>
            <Delete
              onClick={() => dispatch(deleteCartProduct(item.id))}
            >
              <CloseIcon />
            </Delete>
            <IamgeContainer>
              <Image src={item.image} />
            </IamgeContainer>
            <ResponsiveContainer>
            <Title>{item.title?.substr(1, 13)}...</Title><br/>
            <QutityAndPrice>{item.quantity} x ${item.price}</QutityAndPrice>
            </ResponsiveContainer>
          </XAndImg>
        </Product>
        <ProductSellInfo>
          <Price>${item.price}</Price>
          <QuantityEdite>
            <CustomButton size="small">
              <AddRounded style={{ fontSize: "12px" }} />
            </CustomButton>
            <Number>{item.quantity}</Number>
            <CustomButton size="small">
              <RemoveRounded style={{ fontSize: "12px" }} />
            </CustomButton>
          </QuantityEdite>
          <Subtotal>${item.quantity * item.price}</Subtotal>
        </ProductSellInfo>
      </ProductInfoContainer>

      ))}
    </>
  );
};

export default ProductSellInfoComponent;
