import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authorReducer from './slices/authorSlice';
import authReducer from './slices/authSlice';
import bookReducer from './slices/bookSlice';
import genresReducer from './slices/genresSlice';
import roleReducer from './slices/rolesSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  role: roleReducer,
  genres: genresReducer,
  authors: authorReducer,
});

// REDUX PERSIST
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['books', 'role', 'genres'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// REDUX TOOLKIT

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
