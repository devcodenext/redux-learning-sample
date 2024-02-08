import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    // Will be adding in next video.
  },
});

// We have better options with redux toolkit and will be using that.

// console.log(store.getState());
// store.dispatch({
//   type: "counter/increment",
// });
// console.log(store.getState());
