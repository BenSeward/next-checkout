export const fetchCartItems = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products?limit=3"
  ).then((res) => res.json());

  const mapResponse = response.map((cartItem: any) => ({
    id: cartItem.id,
    price: cartItem.price,
    title: cartItem.title,
    qty: 3,
  }));

  return mapResponse;
};
