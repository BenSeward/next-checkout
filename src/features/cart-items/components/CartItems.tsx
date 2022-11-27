import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useStore } from "src/store";

export const CartItems = () => {
  const { cartItems, removeCartItem } = useStore();

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h5">Cart</Typography>

      {cartItems.map((cartItem, index) => {
        return (
          <Card key={index} sx={{ display: "flex", mb: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 100, objectFit: "contain" }}
              src={cartItem.image}
              alt={cartItem.title}
            />
            <CardContent>
              <Typography variant="body1">Title: {cartItem.title}</Typography>
              <Typography variant="body1">Price: {cartItem.price}</Typography>
              <Typography variant="body1">Qty: {cartItem.qty}</Typography>
              <Button onClick={() => removeCartItem(cartItem.id)}>
                Remove Item
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};
