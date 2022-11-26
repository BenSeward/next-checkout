import { useStore } from "src/store";

export const useCart = () => {
  const { cartItems } = useStore();

  const calculateCartTotals = cartItems.reduce((acc, object) => {
    return acc + object.price;
  }, 0);

  return {
    getTotalCost: calculateCartTotals,
  };
};
