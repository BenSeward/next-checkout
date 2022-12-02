import { Container, Typography } from "@mui/material";
import { useCart } from "src/features/cart-items/hooks/useCart";

export const CartTotals = () => {
  const { getTotalCost } = useCart();

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h6">Cart Total: £{getTotalCost}</Typography>
    </Container>
  );
};
