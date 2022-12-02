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
  update: Partial<CartStore>;
  type: string;
};

type UpdateDeliveryOptionParams = {
  update: string;
  type: string;
};

type CartStore = {
  initialized: boolean;
  cartItems: Array<CartItem>;
  shippingDetails: ShippingDetails;
  deliveryOption: string;
  updateCartItems: ({ update, type }: UpdateCartItemsProps) => void;
  updateShippingDetails: ({ update, args }: UpdateShippingParams) => void;
  updateDeliveryOption: ({ update, args }: UpdateDeliveryOptionParams) => void;
  updateInitialize: ({ update, args }: UpdateInitializeParams) => void;
};
