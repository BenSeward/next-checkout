import { CartItem, CartStore, DispatchTypes } from "src/store/types";
import create from "zustand";
import { persist } from "zustand/middleware";

let onRehydrated: () => void;

export const sessionRehydration = new Promise((res) => {
  onRehydrated = res as any;
});

const dispatchTypes: DispatchTypes = { update: "UPDATE", remove: "REMOVE" };

const dispatchCartItems = (state: any, args: any) => {
  switch (args.type) {
    case dispatchTypes.remove:
      const filterItems = state.cartItems.filter((item: CartItem) => item.id !== args.update.id);

      return { ...state, cartItems: filterItems };
  }
};

const dispatchInitialize = (state: any, args: any) => {
  switch (args.type) {
    case dispatchTypes.update:
      return { ...state, ...args.update, initialized: true };
  }
};

const dispatchShippingDetails = (state: any, args: any) => {
  switch (args.type) {
    case dispatchTypes.update:
      return { ...state, shippingDetails: { ...state.shippingDetails, ...args.update } };
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
      updateCartItems: (args) => set((state) => dispatchCartItems(state, args)),
      updateInitialize: (args) => set((state) => dispatchInitialize(state, args)),
      updateShippingDetails: (args) => set((state: CartStore) => dispatchShippingDetails(state, args)),
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
