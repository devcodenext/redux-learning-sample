import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
    // Will be adding in next video.
  },
});

// We have better options with redux toolkit and will be using that.

// console.log(store.getState());
// store.dispatch({
//   type: "counter/increment",
// });
console.log(store.getState());
