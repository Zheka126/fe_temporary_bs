import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import bookReducer from './slices/bookSlice';
import roleReducer from './slices/rolesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    role: roleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
