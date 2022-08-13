import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "./basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
