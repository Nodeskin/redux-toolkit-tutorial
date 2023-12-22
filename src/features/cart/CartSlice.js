import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

const initialState = {
  CartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.CartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.CartItems = state.CartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.CartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.CartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.CartItems.forEach( item =>{
        amount += item.amount 
        total += item.amount * item.price
      })   
      state.amount = amount
      state.total = total
    }
  },
});

// console.log(CartSlice)
export const { clearCart, removeItem, increase, decrease, calculateTotals } = CartSlice.actions;
export default CartSlice.reducer;
