import { Container, Grid, Typography } from "@mui/material";
import { CartItemsSkeleton } from "src/features/cart-items/CartItems.skeleton";

export const CartItems = () => {
  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Cart</Typography>

      <CartItemsSkeleton />
    </Container>
  );
};
