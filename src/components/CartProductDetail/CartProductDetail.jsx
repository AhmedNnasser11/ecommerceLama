import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCartDetail, selectedProducts } from "../../features/products/ProductsSlice";
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
  const { cart } = useSelector(selectedProducts);

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

        {cart.map((product) => {
        return product.products.map((item) => {
          return (
            <GetCartData key={item.productId} productId={item.productId} />
          );
        });
      })}
        <ProductSellInfoComponent />

      {/* end ProductInfoContainer */}
    </CartProductDetailContainer>
  ); 
};

export default CartProductDetail;

const GetCartData = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCartDetail(`products/${props.productId}`));
  }, [dispatch, props.productId]);
  return null
}