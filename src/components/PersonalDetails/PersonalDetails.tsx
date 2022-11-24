import React from "react";
import { Container, TextField, Typography } from "@mui/material";

export const PersonalDetails = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Personal Details</Typography>
      <TextField
        label="First name"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        label="Last name"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        label="Email Address"
        variant="outlined"
        margin="dense"
        fullWidth
      />
    </Container>
  );
};
