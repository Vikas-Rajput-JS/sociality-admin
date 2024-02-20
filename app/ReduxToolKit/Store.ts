import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";
export const Store = () => {
  return configureStore({
    reducer,
  });
};
