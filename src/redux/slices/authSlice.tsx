import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from 'src/api/requests/auth';
import { LoginValues } from 'src/types/user';

import { RootState } from '../store';

export const loginThunk = createAsyncThunk(
  'loginThunk',
  async (values: LoginValues) => {
    try {
      return await login(values);
    } catch (err: any) {
      throw Error(err.response.data);
    }
  }
);

interface UserData {
  userName: string;
  role: string;
  userId: string;
}

interface AuthState {
  user: null | UserData;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData | null>) => {
      state.user = action.payload;
    },
  },
});

export const isAuthSelector = (state: RootState) => Boolean(state.auth.user);
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
