import React from "react";
import { Container, TextField, Typography } from "@mui/material";

export const DeliveryAddress = () => {
  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Delivery Address</Typography>
      <TextField
        label="Address Line One"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        label="Address Line Two"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        label="Town / City"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        label="Postal Code"
        variant="outlined"
        margin="dense"
        fullWidth
      />
    </Container>
  );
};
