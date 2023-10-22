import { configureStore } from "@reduxjs/toolkit";
import {
  AGE_CALCULATOR_SLICE,
  ageCalculatorReducer,
} from "@slices/ageCalculatorSlice";

export const storeClient = configureStore({
  reducer: {
    [AGE_CALCULATOR_SLICE]: ageCalculatorReducer,
  },
});
export type RootState = ReturnType<typeof storeClient.getState>;
export type AppDispatch = typeof storeClient.dispatch;
