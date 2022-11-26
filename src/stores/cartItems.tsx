import create from "zustand";

type CartItem = {
  title: string;
  qty: number;
  price: number;
};

type CartStore = {
  isLoading: boolean;
  cartItems: Array<CartItem>;
  setCartItems: (items: Array<CartItem>) => void;
  initializeStore: (update: Object) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  isLoading: true,
  setCartItems: (update) => {
    set((state) => ({
      isLoading: false,
      cartItems: [...state.cartItems, ...update],
    }));
  },
  initializeStore: (update) => {
    set((state) => {
      // Checking current state and returns if there is no update
      if (JSON.stringify(state) == JSON.stringify({ ...state, ...update })) {
        return state;
      }

      return { ...state, ...update };
    });
  },
}));
