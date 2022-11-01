import { createSlice } from "@reduxjs/toolkit";

export let slices = createSlice({
  name: "slicestate",

  initialState: {
    user: [
      { name: "alphanse", age: 24 },
      { name: "arul", age: 9 },
      { name: "kemal", age: 28 },
      { name: "Rahul", age: 19 },
      { name: "arun", age: 22 },
    ],
  },

  reducers: {
    useraction: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { useraction } = slices.actions;
export default slices.reducer;
