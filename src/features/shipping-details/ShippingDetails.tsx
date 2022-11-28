import {
  Container,
  Divider,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { onSubmit } from "src/features/shipping-details/utils/handleSubmit";
import { useStore } from "src/store";

export const ShippingDetails = () => {
  const { shippingDetails, updateShippingDetails } = useStore();
  const { register, handleSubmit } = useForm({
    defaultValues: shippingDetails,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, updateShippingDetails))}
    >
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Typography variant="h6">Shipping Address</Typography>
        <TextField
          label="First name"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("firstName")}
        />
        <TextField
          label="Last name"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("lastName")}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("emailAddress")}
        />

        <Divider sx={{ my: 4 }} />

        <TextField
          label="Address Line One"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.addressLineOne")}
        />
        <TextField
          label="Address Line Two"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.addressLineTwo")}
        />
        <TextField
          label="Town / City"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.townCity")}
        />
        <TextField
          label="Postcode"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.postCode")}
        />
        <Input type="submit" />
      </Container>
    </form>
  );
};
