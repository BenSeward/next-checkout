import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container } from "@mui/system";

type PageStepperProps = {
  activeStep: number;
};

const steps = ["Shipping details", "Delivery options", "Review & pay"];

export const PageStepper = ({ activeStep }: PageStepperProps) => {
  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
};
