import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'src/api/requests';
import { LoginValues } from 'src/types/LoginReq';

export const login = createAsyncThunk('login', async (values: LoginValues) => {
    try {
        const resp = await API.login(values) 
        return resp
    } catch (err: any) {
        throw Error(err.response.data);
    }
})

interface UserData {
  userName: string;
  role: string;
  userId: string;
}

export interface AuthState {
  user: UserData;
}

const initialState: AuthState = {
  user: {
    userName: '',
    role: '',
    userId: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
