import { Box, Button, Container, Typography } from "@mui/material";
import { fetchCartItems } from "src/features/cart-items/api/fetchCartItems";
import { useStore } from "src/store";

export const CartItems = () => {
  const { cartItems, removeCartItem, initializeStore } = useStore();

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Cart</Typography>

      {cartItems.map((cartItem, index) => {
        return (
          <Box key={index}>
            <Typography variant="h6">Title: {cartItem.title}</Typography>
            <Typography variant="h6">Price: {cartItem.price}</Typography>
            <Typography variant="h6">Qty: {cartItem.qty}</Typography>
            <Button onClick={() => removeCartItem(cartItem.id)}>
              Remove Item
            </Button>
          </Box>
        );
      })}
    </Container>
  );
};
