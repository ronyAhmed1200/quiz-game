import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./scoreSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    score: scoreSlice.reducer,
    ui: uiSlice.reducer,
  },
});
