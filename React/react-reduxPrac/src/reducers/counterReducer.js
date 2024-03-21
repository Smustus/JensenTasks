import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(value, action){
      return value + action.payload;
    }
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;