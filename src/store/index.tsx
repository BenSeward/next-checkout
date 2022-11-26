import create from "zustand";

type CartItem = {
  id: number;
  title: string;
  qty: number;
  price: number;
};

type PersonalDetails = {
  firstName: string;
  lastName: string;
  emailAddress: string;
};

type CartStore = {
  initializeStore: (update: Partial<CartStore>) => void;
  cartItems: Array<CartItem>;
  setCartItems: (items: Array<CartItem>) => void;
  removeCartItem: (id: number) => void;
  personalDetails: PersonalDetails;
  updatePersonalDetails: (personalDetail: Partial<PersonalDetails>) => void;
};

export const useStore = create<CartStore>((set) => ({
  cartItems: [],
  personalDetails: {
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
      if (JSON.stringify(state) == JSON.stringify({ ...state, ...update })) {
        return state;
      }

      return { ...state, ...update };
    });
  },
  updatePersonalDetails: (update) => {
    set((state) => ({
      personalDetails: {
        ...state.personalDetails,
        ...update,
      },
    }));
  },
}));
