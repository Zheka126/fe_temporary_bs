import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'src/api/requests';
import { LoginValues } from 'src/types/LoginReq';

import { RootState } from '../store';

export const login = createAsyncThunk(
  'loginThunk',
  async (values: LoginValues) => {
    try {
      const resp = await API.login(values);
      return resp;
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

export const isAuthSelector = ({ auth }: RootState) => Boolean(auth.user);

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
