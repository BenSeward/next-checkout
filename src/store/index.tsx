import create from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  title: string;
  qty: number;
  price: number;
  image: string;
};

type ShippingDetails = {
  firstName: string;
  lastName: string;
  emailAddress: string;
};

type CartStore = {
  initializeStore: (update: Partial<CartStore>) => void;
  initialized: boolean;
  cartItems: Array<CartItem>;
  setCartItems: (items: Array<CartItem>) => void;
  removeCartItem: (id: number) => void;
  shippingDetails: ShippingDetails;
  updateShippingDetails: (shippingDetail: Partial<ShippingDetails>) => void;
};

let onRehydrated: () => void;

export const sessionRehydration = new Promise((res) => {
  onRehydrated = res as any;
});

export const useStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      initialized: false,
      shippingDetails: {
        firstName: "",
        lastName: "",
        emailAddress: "",
      },
      setCartItems: (update) => {
        set((state) => ({
          cartItems: [...state.cartItems, ...update],
        }));
      },
      removeCartItem: (id) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        }));
      },
      initializeStore: (update) => {
        set((state) => {
          if (
            JSON.stringify(state) == JSON.stringify({ ...state, ...update })
          ) {
            return state;
          }

          return { ...state, ...update, initialized: true };
        });
      },
      updateShippingDetails: (update) => {
        set((state) => ({
          shippingDetails: {
            ...state.shippingDetails,
            ...update,
          },
        }));
      },
    }),
    {
      name: "checkout-store",
      onRehydrateStorage: () => {
        return () => {
          onRehydrated();
        };
      },
    }
  )
);
