import { Container, TextField, Typography } from "@mui/material";
import { useStore } from "src/store";

export const ShippingDetails = () => {
  const { updateShippingDetails } = useStore();

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Shipping Details</Typography>
      <TextField
        label="First name"
        variant="outlined"
        margin="dense"
        fullWidth
        onChange={(e) => updateShippingDetails({ firstName: e.target.value })}
      />
      <TextField
        label="Last name"
        variant="outlined"
        margin="dense"
        fullWidth
        onChange={(e) => updateShippingDetails({ lastName: e.target.value })}
      />
      <TextField
        label="Email Address"
        variant="outlined"
        margin="dense"
        fullWidth
        onChange={(e) =>
          updateShippingDetails({ emailAddress: e.target.value })
        }
      />
    </Container>
  );
};
