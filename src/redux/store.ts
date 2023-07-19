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

<<<<<<< HEAD
import assignmentsReducer from './slices/assignmentsSlice';
import authorsReducer from './slices/authorsSlice';
=======
import authorReducer from './slices/authorSlice';
>>>>>>> feat/INTPO002PD-3721_Books_&_Assignments_Tab
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
<<<<<<< HEAD
  assignments: assignmentsReducer,
  authors: authorsReducer
=======
  authors: authorReducer,
>>>>>>> feat/INTPO002PD-3721_Books_&_Assignments_Tab
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
