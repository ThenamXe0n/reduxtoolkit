import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    // product:,
    counter: CounterSlice.reducer,
    devTools: false,
  },
});

export default store;
