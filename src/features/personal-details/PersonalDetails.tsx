import { Container, TextField, Typography } from "@mui/material";
import { useStore } from "src/store";

export const PersonalDetails = () => {
  const { updatePersonalDetails } = useStore();

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Personal Details</Typography>
      <TextField
        label="First name"
        variant="outlined"
        margin="dense"
        fullWidth
        onChange={(e) => updatePersonalDetails({ firstName: e.target.value })}
      />
      <TextField
        label="Last name"
        variant="outlined"
        margin="dense"
        fullWidth
        onChange={(e) => updatePersonalDetails({ lastName: e.target.value })}
      />
      <TextField
        label="Email Address"
        variant="outlined"
        margin="dense"
        fullWidth
        onChange={(e) =>
          updatePersonalDetails({ emailAddress: e.target.value })
        }
      />
    </Container>
  );
};
