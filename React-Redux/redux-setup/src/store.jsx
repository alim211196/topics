import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlice";

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

export default store;
