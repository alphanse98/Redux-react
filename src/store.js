import { configureStore } from "@reduxjs/toolkit";
import slices from "./slice"

export const store = configureStore({
  reducer: {
    user : slices
  },
});
