import { createSlice } from "@reduxjs/toolkit";

type headerState = {
  isDropdownShowed: boolean;
};

const initialState: headerState = {
  isDropdownShowed: false,
};

export const headerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIsDropdownShowed: (state, { payload }) => {
      state.isDropdownShowed = payload;
    },
  },
});

export const { setIsDropdownShowed } = headerSlice.actions;

export default headerSlice.reducer;
