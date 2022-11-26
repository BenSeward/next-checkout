import { Box, Button, Container, Typography } from "@mui/material";
import { useStore } from "src/store";

export const CartItems = () => {
  const { cartItems } = useStore();

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Cart</Typography>

      {cartItems.map((cartItem, index) => {
        return (
          <Box key={index}>
            <Typography variant="h6">Title: {cartItem.title}</Typography>
            <Typography variant="h6">Price: {cartItem.price}</Typography>
            <Typography variant="h6">Qty: {cartItem.qty}</Typography>
          </Box>
        );
      })}
    </Container>
  );
};
