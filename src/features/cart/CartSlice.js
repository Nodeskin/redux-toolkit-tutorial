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
    removeItem: (state, action)=>{
     const itemId = action.payload;
     state.CartItems = state.CartItems.filter((item) => item.id !== itemId);
    }
  },
});

console.log(CartSlice)
export const { clearCart, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
