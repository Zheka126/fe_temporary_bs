import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGenres } from 'src/api/requests/genre';
import { GenreType } from 'src/types/genre';

export const getGenresThunk = createAsyncThunk('getGenresThunk', async () => {
  try {
    const { data } = await getGenres();
    return data;
  } catch (error) {
    throw Error('Can\'t get genres');
  }
});

export interface GenresState {
  genres: GenreType[];
}

const initialState: GenresState = {
  genres: [],
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(
      getGenresThunk.fulfilled,
      (state, action: PayloadAction<GenreType[]>) => {
        state.genres = action.payload;
      }
    );
  },
});

export const { setGenres } = genresSlice.actions;

export default genresSlice.reducer;
