type CartItem = {
  id: number;
  title: string;
  qty: number;
  price: number;
  image: string;
};

export type ShippingDetails = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  shippingAddress: {
    addressLineOne: string;
    addressLineTwo: string;
    townCity: string;
    postCode: string;
  };
};

export type CartStore = {
  initialized: boolean;
  cartItems: Array<CartItem>;
  shippingDetails: ShippingDetails;
  initializeStore: (update: Partial<CartStore>) => void;
  setCartItems: (items: Array<CartItem>) => void;
  removeCartItem: (id: number) => void;
  updateShippingDetails: (shippingDetail: Partial<ShippingDetails>) => void;
};
