import { CartItem, CartStore, DispatchTypes } from "src/store/types/types";
import create from "zustand";
import { persist } from "zustand/middleware";

let onRehydrated: () => void;

export const sessionRehydration = new Promise((res) => {
  onRehydrated = res as any;
});

const dispatchTypes: DispatchTypes = { update: "UPDATE", remove: "REMOVE" };

const dispatchCartItems = (state: any, update: any, type: any) => {
  switch (type) {
    case dispatchTypes.remove:
      const filterItems = state.cartItems.filter((item: CartItem) => item.id !== update.id);

      return { ...state, cartItems: filterItems };
  }
};

const dispatchInitialize = (state: any, update: any, type: any) => {
  switch (type) {
    case dispatchTypes.update:
      return { ...state, ...update, initialized: true };
  }
};

const dispatchShippingDetails = (state: any, update: any, type: any) => {
  switch (type) {
    case dispatchTypes.update:
      return { ...state, shippingDetails: { ...state.shippingDetails, ...update } };
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
      dispatchInitialize: (update, args) => set((state) => dispatchInitialize(state, update, args)),
      dispatchShippingDetails: (update, args) => set((state) => dispatchShippingDetails(state, update, args)),
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
