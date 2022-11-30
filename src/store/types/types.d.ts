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

type DispatchTypes = {
  update: string;
  remove: string;
};

type UpdateCartItemsProps = {
  update: CartItem;
  type: string;
};

type UpdateShippingParams = {
  update: Partial<ShippingDetails>;
  type: string;
};

type UpdateInitializeParams = {
  update: Partial<ShippingDetails>;
  type: string;
};

type CartStore = {
  initialized: boolean;
  cartItems: Array<CartItem>;
  shippingDetails: ShippingDetails;
  updateCartItems: ({ update, type }: UpdateCartItemsProps) => any;
  dispatchInitialize: (update: any, args: any) => any;
  updateShippingDetails: ({ update, args }: UpdateShippingParams) => void;
};
