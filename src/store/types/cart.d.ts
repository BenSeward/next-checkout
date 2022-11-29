type CartItem = {
  id: number;
  title: string;
  qty: number;
  price: number;
  image: string;
};

type CartStore = {
  initialized: boolean;
  cartItems: Array<CartItem>;
  shippingDetails: ShippingDetails;
  initializeStore: (update: Partial<CartStore>) => void;
  updateShippingDetails: (shippingDetail: Partial<ShippingDetails>) => void;
  dispatchCartItems: (update: any, args: any) => any;
};
