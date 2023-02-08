import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  total: 0,
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

    incrementInCart: (state, { payload }) => {
      const existing = state.cartItems.find((item) => item.id === payload.id);
      if (existing) {
        existing.amount = existing.amount + 1;
        state.cartQuantity = state.cartQuantity + 1;
      }
    },

    decrementInCart: (state, { payload }) => {
      const existing = state.cartItems.find((item) => item.id === payload.id);
      if (existing) {
        existing.amount = existing.amount - 1;
        state.cartQuantity = state.cartQuantity - 1;
      }
    },

    totalInCart: (state) => {
      state.cartItems.forEach((item) => {
        let totalFee = item.amount * item.value;
        console.log(item.amount, item.value);
        state.total += totalFee;
      });
    },
  },
});

// console.log(cartSlice);

export const {
  removeItem,
  addItem,
  incrementInCart,
  decrementInCart,
  totalInCart,
} = cartSlice.actions;

export default cartSlice.reducer; // exporting the reducer from the entire cartslice
