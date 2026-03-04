import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 12,
  clickedCount: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("incrementing");
      state.count += 1;
      state.clickedCount += 1;
    },
    manualCountValue: (state, action) => {
        
      state.count = action.payload.value;
    },
  },
});

export const { increment,manualCountValue } = CounterSlice.actions;

export default CounterSlice;


let data = []
