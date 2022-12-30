import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getCartTotal } from "../../features/products/ProductsSlice";
import { selectedProducts } from "../../features/products/ProductsSlice";
import {
  CartTotalContainer,
  CartTotalTitleContainer,
  CustomButton,
  SubTotal,
  SubTotalNumber,
  SubTotalTitle,
  Title,
} from "./CartTotalStyle"; 

const CartTotal = () => {
    const { cart } = useSelector(selectedProducts);

  return (
    <CartTotalContainer> 
      <CurrencyFormat
        renderText={(value) => (
          <>
            <CartTotalTitleContainer>
              <Title>Cart Total</Title>
            </CartTotalTitleContainer>
            <SubTotal>
              <SubTotalTitle>Subtotal</SubTotalTitle>
              <SubTotalNumber>{value}</SubTotalNumber>
            </SubTotal>
            <SubTotal>
              <SubTotalTitle>Total</SubTotalTitle>
              <SubTotalNumber>{value}</SubTotalNumber>
            </SubTotal>
            <CustomButton variant="contained">Proceed to checkout</CustomButton>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </CartTotalContainer>
  );
};

export default CartTotal;
