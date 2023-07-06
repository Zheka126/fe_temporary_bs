import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducers/loginSlice';
import registerReducer from './reducers/registerSlice';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
