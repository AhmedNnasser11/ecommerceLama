import { Button, IconButton } from "@mui/material";
import styled from "styled-components";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

export const CartProductDetailContainer = styled.section`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  @media (max-width: 855px) {
    padding-right: 0;
}
`;

export const TitleContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #777777;
  font-weight: bold;
  line-height: 1.05;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.9em;
  border-bottom: 2px solid #ececec;
  padding-bottom: 13px;
`;

export const Product = styled.div`
  flex: 0.5;
`;

export const ProductInfo = styled.ul`
  list-style-type: none;
  justify-content: flex-end;
  display: flex;
  column-gap: 25px;
  flex: 0.5;
`;
export const Price = styled.li`
  width: 75px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 534px) {
     display: none;
    }
`;

export const Quantity = styled.li`
    display: flex;
    align-items: center;
    width: 75px;
`;
export const CustomButton = styled(Button)`
  color: #777777 !important;
  border: 1px solid #ddd !important;
  min-width: 22px !important;
  height: 33px;
  transition: .3 all ease;
  border-radius: 0 !important;
  &:hover{
    transition: .3 all ease;
    background: #C1C1C1 !important;
    color: #000 !important;
  }
`

export const Number = styled.span`
    border: 1px solid #ddd;
    min-width: 22px !important;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Subtotal = styled.li`
  width: 75px;
  display: flex;
  justify-content: center;
  @media (max-width: 534px) {
     display: none;
    }
`;

export const ProductInfoContainer = styled(TitleContainer)`
  padding-top: 13px;
`;

export const XAndImg = styled(Product)`
    display: flex;
    align-items: center;
    column-gap: 12px;
    @media (max-width: 534px) {
     flex: .7 !important;
    }
`
export const QutityAndPrice  = styled.p`
font-size: 12px;
  @media (min-width: 534px) {
      display: none;
    }
`
export const ResponsiveContainer = styled.div``

export const Delete = styled(IconButton)`
   
`
export const CloseIcon = styled(HighlightOffOutlinedIcon)`
    color: #ddd;
    transition: .3s color ease;
    font-size: 30px !important;
    &:hover{
        color: #b20000;
        transition: .3s color ease;
    }
`
export const IamgeContainer = styled.div`
    width: 80px;
    height: 95px;
    @media (max-width: 534px) {
      width: 70px;
      height: 80px;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const Title = styled.p`
   @media (max-width: 534px) {
     width: 100px !important;
     font-size: 12px;
    }
`

export const ProductSellInfo = styled(ProductInfo)`
    display: flex;
    flex: 0.5;
    align-items: center;
    column-gap: 25px;
`

export const QuantityEdite = styled(Quantity)`
   display: flex;
  justify-content: flex-end;
`

export const OurButtonGroup = styled.div`
    margin-top: 15px;
    display: flex;
    column-gap: 10px;
    text-transform: capitalize;
    @media (max-width: 434px) {
      display: flex;
      flex-direction: column;
      row-gap: 7px;
      .continue__shopping{
        width: 100%;
      }
    }
`

export const CustomArrowRight = styled(ArrowRightAltIcon)`
   transform: rotate(180deg);
   
`

export const ContinueShopping = styled(Button)`
    border-radius: 0 !important;
`

export const UpDateCart = styled(Button)`
    border-radius: 0 !important;
`