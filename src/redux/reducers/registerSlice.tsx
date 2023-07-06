import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'src/api/requests';
import { UserRegistrationData, UserTokenData } from 'src/types/user';

import { RootState } from '../store';

export const registerThunk = createAsyncThunk(
  'registerThunk',
  async (values: UserRegistrationData) => {
    try {
      const res = await API.register(values);
      return res;
    } catch (err: any) {
      throw Error(err.response.data);
    }
  }
);

export interface RegisterState {
  user: UserTokenData | null;
}

const initialState: RegisterState = {
  user: null,
};

// I have no idea what i'm doing
export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    // why can't we write just RegisterState instead of <UserTokenData | null>
    setUser: (state, action: PayloadAction<UserTokenData | null>) => {
      state.user = action.payload;
    },
  },
});

export const isAuthSelector = ({ register }: RootState) =>
  Boolean(register.user);
export const { setUser } = registerSlice.actions;
export default registerSlice.reducer;
