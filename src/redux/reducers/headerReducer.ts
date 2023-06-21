import { createSlice } from '@reduxjs/toolkit';

type headerState = {
  isSubmenuShowed: boolean;
};

const initialState: headerState = {
  isSubmenuShowed: false,
};

export const headerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsSubmenuShowed: (state, { payload }) => {
      state.isSubmenuShowed = payload;
    },
  },
});

export const { setIsSubmenuShowed } = headerSlice.actions;

export default headerSlice.reducer;
