import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('Action är: ', action.payload);
      const isProduct = state.find((obj) => {
        return obj.title === action.payload.title
      });
      console.log(isProduct);
      if(!isProduct){
        state.push(action.payload);
      } else {
        isProduct.quantity++
      }
    },
    increaseQuantity(state, action) {
      console.log('Action är: ', action.payload);
      const isProduct = state.find((obj) => {
        return obj.title === action.payload.title
      });
      isProduct.quantity++;
    },
   
    decreaseQuantity(state, action) {
      console.log('Action är: ', action.payload);
      const isProduct = state.find((obj) => {
        return obj.title === action.payload.title
      });
      let quantity = action.payload.quantity;
      quantity--;
      console.log(quantity);
      if(quantity === 0){
        return state.filter((obj) => {
          return obj.title !== action.payload.title;
        });
      } else {
        isProduct.quantity = quantity;
      }
    }
    //** Här ska du kolla om produkten redan finns i arrayen och ifall den finns ska du inte pusha in i array:en utan istället öka egenskapen "quantity" med 1. Ifall produkten inte finns ska du pusha in produkten i array:en. Kolla i Product.jsx hur objektet för en produkt ser ut, där ser du egenskapen "quantity". */

    //* Här ska du lägga till två reducers "increaseQuantity" och "decreaseQuantity" som ökar eller minska "quantity" med 1. Ifall quantity är 1 och man minska ska produkten tas bort från array:en. Det är dessa två som kopplas till knapparna i CartItem.jsx, se kommentarer där. */
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
