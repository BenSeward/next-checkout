import create from "zustand";
import { persist } from "zustand/middleware";
// import { CartStore } from "src/store/types/types";

let onRehydrated: () => void;

export const sessionRehydration = new Promise((res) => {
  onRehydrated = res as any;
});

const storeOptions = {
  name: "checkout-store",
  onRehydrateStorage: () => {
    return () => {
      onRehydrated();
    };
  },
};

type DispatchTypes = {
  update: string;
  remove: string;
};

const types: DispatchTypes = { update: "UPDATE", remove: "REMOVE" };

const dispatchCartItems = (state: any, update: any, type: any) => {
  switch (type) {
    case types.remove:
      const mango = state.cartItems.filter((item: CartItem) => item.id !== update.id);

      return { ...state, cartItems: mango };
  }
};

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
      dispatchCartItems: (update, args) => set((state) => dispatchCartItems(state, update, args)),
      initializeStore: (update) => {
        set((state) => ({ ...state, ...update, initialized: true }));
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
    storeOptions
  )
);
