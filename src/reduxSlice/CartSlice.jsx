import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../Products";

const initialState = {
  cartItems: allProducts,
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {}, //for this particular slice or state
});

console.log(cartSlice);

// export const {  } from cartSlice.actions

export default cartSlice.reducer; // exporting the reducer from the entire cartslice
