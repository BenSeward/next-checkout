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

type CartStore = {
  initialized: boolean;
  cartItems: Array<CartItem>;
  shippingDetails: ShippingDetails;
  dispatchCartItems: (update: any, args: any) => any;
  dispatchInitialize: (update: any, args: any) => any;
  dispatchShippingDetails: (update: any, args: any) => any;
};

type DispatchTypes = {
  update: string;
  remove: string;
};
