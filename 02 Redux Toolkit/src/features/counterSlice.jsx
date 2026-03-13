import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:"counter",
  initialState:{
    value:0
  },
  reducers:{
    increment:(state)=>{state.value+=1},
    decrement:(state)=>{state.value-=1},
    incrementByFive:(state)=>{state.value+=5}
  }
})

export const {increment,decrement,incrementByFive} = counterSlice.actions;

export default counterSlice.reducer;