import styled from "styled-components";
import { Button } from '@mui/material'

export const CartTotalContainer = styled.section`
  width: 100%;
  margin-top: 53px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  border-left: 2px solid #ececec;

`;
export const CartTotalTitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    border-bottom: 2px solid #ececec;
    padding-bottom: 13px;
`
export const Title = styled.h3`
color: #777777;
font-weight: bold;
line-height: 1.05;
letter-spacing: 0.05em;
text-transform: uppercase;
font-size: 0.9em;
`

export const SubTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 27px;
    padding-bottom: 12px;
    border-bottom: 2px solid #ececec;
`
export const SubTotalTitle = styled(Title)`
    text-transform: capitalize;
    font-weight: normal;
`

export const SubTotalNumber = styled.div`
color: #111;
font-weight: bold;
`

export const CustomButton = styled(Button)`
    width: 100%;
    background-color: #007784 !important;
    padding-top: 9px !important;
    padding-bottom: 8px !important;
    border-radius: 0 !important;
    margin-top: 22px !important;
    font-weight: 700 !important;
    font-size: .97em !important;
    letter-spacing: .03em !important;
`