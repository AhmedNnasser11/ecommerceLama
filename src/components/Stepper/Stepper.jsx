import React from "react";
import { Stepper, Step, StepLabel} from '@mui/material'

const StepperComponent = () => {
  return (
    <Stepper activeStep={0}>
      <Step>
        <StepLabel>Shopping Cart</StepLabel>
      </Step>
      <Step>
        <StepLabel>Checkout Details</StepLabel>
      </Step>
      <Step>
        <StepLabel>Order Compelete</StepLabel>
      </Step>
    </Stepper>
  );
};

export default StepperComponent;
