import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // Here we will be defining all the actions.
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
    // Resetting both from a single action.
    // resetCounter: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase("destination/resetDestination", (state, action) => {
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  // resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
