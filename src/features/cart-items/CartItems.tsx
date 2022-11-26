import { Box, Button, Container, Typography } from "@mui/material";
import { CartItemsSkeleton } from "src/features/cart-items/CartItems.skeleton";
import { useCartStore } from "src/stores/cartItems";

export const CartItems = () => {
  const { cartItems } = useCartStore();

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Cart</Typography>

      <CartItemsSkeleton />

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
