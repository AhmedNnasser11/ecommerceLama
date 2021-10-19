import { Grid, Button, Badge } from "@mui/material";

import styled from "styled-components";
export const ViewDetailsContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 35px;
  .img__detail {
    width: 374px;
    height: 360px;
    object-fit: contain;
  }
  h3 {
    text-transform: uppercase;
    color: #595959;
    font-weight: bold;
  }
  p{
    color: #111;
    font-weight: bold;
    font-size: 1.5em;
    margin: .5em 0;
  }
  article{
    margin-bottom: 1.3em;
    color: #777777;
    line-height: 1.6;
  }
  .count__button{
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  .number{
    border: 1px solid #ddd;
    width: 39px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  .count{
    display: flex;
    align-items: center;
    column-gap: 5px;
  }
`;

export const CustomSideBarGrid = styled(Grid)`
  @media (max-width: 828px) {
    display: none;
  }
`;

export const CustomButton = styled(Button)`
  color: #777777 !important;
  border: 1px solid #ddd !important;
  min-width: 20px !important;
  transition: .3 all ease;
  height: 43px;
  &:hover{
    transition: .3 all ease;
    background: #C1C1C1 !important;
    color: #000 !important;
  }
`
export const AddToCart = styled(Button)`
  display: flex !important;
  height: 43px;
  align-items: center !important;
  font-weight: bold !important;
  background-color: #007784 !important;
  &:hover{
    background-color: #005F6A !important;
  }
`
