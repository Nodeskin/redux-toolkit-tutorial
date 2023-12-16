import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
 
const CartSlice = createSlice({
  name: "cart",
  initialState,
});
// console.log(CartSlice);
export default CartSlice;
