import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './reducers/headerReducer';

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
