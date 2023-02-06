import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, { payload: { id } }) => {
      //console.log(action.payload);
      state.cartQuantity = state.cartQuantity - 1;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    addItem: (state, { payload }) => {
      const existing = state.cartItems.find((item) => item.id === payload.id);
      if (existing) {
        existing.amount = existing.amount + payload.amount;
      } else {
        state.cartItems.unshift(payload);
        state.cartQuantity = state.cartQuantity + 1;
      }
    },

    increment: (state, { payload }) => {
      payload.amount = payload.amount + 1;
      //   console.log(payload.amount);
    },

    decrement: (state, { payload }) => {
      if (payload.amount === 1) return;
      payload.amount = payload.amount - 1;
    },

    incrementInCart: (state, { payload }) => {
      const existing = state.cartItems.find((item) => item.id === payload.id);
      if (existing) {
        existing.amount = existing.amount + 1;
      }
    },

    decrementInCart: (state, { payload }) => {
      const existing = state.cartItems.find((item) => item.id === payload.id);
      if (existing) {
        existing.amount = existing.amount - 1;
      }
    },
  },
});

// console.log(cartSlice);

export const {
  removeItem,
  addItem,
  increment,
  decrement,
  incrementInCart,
  decrementInCart,
} = cartSlice.actions;

export default cartSlice.reducer; // exporting the reducer from the entire cartslice
