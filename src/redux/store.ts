import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
