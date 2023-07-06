import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'src/api/requests';
import { UserCredentials, UserTokenData } from 'src/types/user';

import { RootState } from '../store';

export const loginThunk = createAsyncThunk(
  'loginThunk',
  async (values: UserCredentials) => {
    try {
      const res = await API.login(values);
      return res;
    } catch (err: any) {
      throw Error(err.response.data);
    //   or
    //   return rejectWithValue('Failed to login. Please try again.');
    }
  }
);

export interface LoginState {
  user: UserTokenData | null;
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed';

}

const initialState: LoginState = {
  user: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // why can't we write just LoginState instead of <UserTokenData | null>
    setUser: (state, action: PayloadAction<UserTokenData | null>) => {
      state.user = action.payload;
    },
  },
//   should we handle the loading state
//   extraReducers: (builder) => {}
});

export const isAuthSelector = ({ login }: RootState) => Boolean(login.user);
export const { setUser } = loginSlice.actions;
export default loginSlice.reducer;
