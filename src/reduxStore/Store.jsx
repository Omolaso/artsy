import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reduxSlice/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
