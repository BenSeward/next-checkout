import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container } from "@mui/system";

const steps = ["Shipping details", "Delivery options", "Review & pay"];

export const PageStepper = () => {
  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Box>
        <Stepper activeStep={1} alternativeLabel>
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
