import create from "zustand";
import { persist } from "zustand/middleware";
import { CartStore } from "src/store/types/types";

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
        shippingAddress: {
          addressLineOne: "",
          addressLineTwo: "",
          townCity: "",
          postCode: "",
        },
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
