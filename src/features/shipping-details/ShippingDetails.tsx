import {
  Container,
  Divider,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useStore } from "src/store";
import { useForm } from "react-hook-form";

export const ShippingDetails = () => {
  const { updateShippingDetails } = useStore();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: unknown) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Typography variant="h6">Personal details</Typography>
        <TextField
          label="First name"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("firstName")}
          // onChange={(e) => updateShippingDetails({ firstName: e.target.value })}
        />
        <TextField
          label="Last name"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("lastName")}
          // onChange={(e) => updateShippingDetails({ lastName: e.target.value })}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("emailAddress")}
          // onChange={(e) =>
          //   updateShippingDetails({ emailAddress: e.target.value })
          // }
        />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6">Deliver to</Typography>

        <TextField
          label="Address Line One"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.addressLineOne")}
          // onChange={(e) =>
          //   updateShippingDetails({ emailAddress: e.target.value })
          // }
        />
        <TextField
          label="Address Line Two"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.addressLineTwo")}
          // onChange={(e) =>
          //   updateShippingDetails({ emailAddress: e.target.value })
          // }
        />
        <TextField
          label="Town / City"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.townCity")}
          // onChange={(e) =>
          //   updateShippingDetails({ emailAddress: e.target.value })
          // }
        />
        <TextField
          label="Postcode"
          variant="outlined"
          margin="dense"
          fullWidth
          {...register("shippingAddress.postCode")}
          // onChange={(e) =>
          //   updateShippingDetails({ emailAddress: e.target.value })
          // }
        />
        <Input type="submit" />
      </Container>
    </form>
  );
};
