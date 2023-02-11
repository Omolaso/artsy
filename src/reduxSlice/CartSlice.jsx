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
    clearCart: (state) => {
      state.cartItems = [];
    },

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
      }
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

    totalInCart: (state) => {
      let totalCartQuantity = 0;
      let totalFee = 0;
      state.cartItems.forEach((item) => {
        totalCartQuantity += item.amount;
        totalFee += item.amount * item.value;
      });
      state.cartQuantity = totalCartQuantity;
      state.total = totalFee;
    },
  },
});

// console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  addItem,
  incrementInCart,
  decrementInCart,
  totalInCart,
} = cartSlice.actions;

export default cartSlice.reducer; // exporting the reducer (i.e entire cartslice)
