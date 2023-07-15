import { configureStore } from '@reduxjs/toolkit';

import assignmentsReducer from './slices/assignmentsSlice';
import authReducer from './slices/authSlice';
import bookReducer from './slices/bookSlice';
import genresReducer from './slices/genresSlice';
import roleReducer from './slices/rolesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    role: roleReducer,
    genres: genresReducer,
    assignments: assignmentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
