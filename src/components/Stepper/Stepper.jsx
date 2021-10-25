import React, { useEffect } from "react";
import { Step, StepLabel} from '@mui/material'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CustomStepper } from "./SteppersStyle";

const StepperComponent = () => {
  const [state, setstate] = useState(0)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cart") {
      setstate(0)
    }else if (location.pathname === "/checkout") {
      setstate(1)
    }
  }, [location.pathname])


  return (
    <CustomStepper activeStep={state}>
      <Step>
        <StepLabel>Shopping Cart</StepLabel>
      </Step>
      <Step>
        <StepLabel>Checkout Details</StepLabel>
      </Step>
      <Step>
        <StepLabel>Order Compelete</StepLabel>
      </Step>
    </CustomStepper>
  );
};

export default StepperComponent;
