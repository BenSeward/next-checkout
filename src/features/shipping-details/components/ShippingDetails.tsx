import { Button, Container, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useShippingDetails } from "src/features/shipping-details/hooks/useShippingDetails";
import { useStore } from "src/store";

export const ShippingDetails = () => {
  const { shippingDetails, updateShippingDetails } = useStore();
  const { updateField } = useShippingDetails();
  const { push } = useRouter();
  const { handleSubmit } = useForm({
    defaultValues: shippingDetails,
  });

  const { firstName, lastName, emailAddress, shippingAddress } = shippingDetails;

  return (
    <form onSubmit={handleSubmit((data) => console.log(data, updateShippingDetails, push))}>
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Typography variant="h6">Shipping Address</Typography>
        <TextField
          label="First name"
          variant="outlined"
          margin="dense"
          fullWidth
          value={firstName}
          onChange={(e) => updateField({ firstName: e.target.value })}
        />
        <TextField
          label="Last name"
          variant="outlined"
          margin="dense"
          fullWidth
          value={lastName}
          onChange={(e) => updateField({ lastName: e.target.value })}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          margin="dense"
          fullWidth
          value={emailAddress}
          onChange={(e) => updateField({ emailAddress: e.target.value })}
        />

        <Divider sx={{ my: 4 }} />

        <TextField
          label="Address Line One"
          variant="outlined"
          margin="dense"
          fullWidth
          value={shippingAddress.addressLineOne}
          onChange={(e) => updateField({ shippingAddress: { ...shippingAddress, addressLineOne: e.target.value } })}
        />
        <TextField
          label="Address Line Two"
          variant="outlined"
          margin="dense"
          fullWidth
          value={shippingAddress.addressLineTwo}
          onChange={(e) => updateField({ shippingAddress: { ...shippingAddress, addressLineTwo: e.target.value } })}
        />
        <TextField
          label="Town / City"
          variant="outlined"
          margin="dense"
          fullWidth
          value={shippingAddress.townCity}
          onChange={(e) => updateField({ shippingAddress: { ...shippingAddress, townCity: e.target.value } })}
        />
        <TextField
          label="Postcode"
          variant="outlined"
          margin="dense"
          fullWidth
          sx={{ mb: 2 }}
          value={shippingAddress.postCode}
          onChange={(e) => updateField({ shippingAddress: { ...shippingAddress, postCode: e.target.value } })}
        />
        <Button variant="contained" type="submit">
          Continue to delivery methods
        </Button>
      </Container>
    </form>
  );
};
