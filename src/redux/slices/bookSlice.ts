import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'src/api/requests';
import { BookItem } from 'src/types/BookItem';
import { FilterValues } from 'src/types/FilterValues';

export const getBooks = createAsyncThunk('getBooksThunk', async ({ search, selectedGenres }: FilterValues) => {
  try {
    const { data } = await API.getBooks({ search, selectedGenres });
    return data;
  } catch (err) {
    throw Error('Something went wrong');
  }
});

export interface BookState {
  books: BookItem[];
}

const initialState: BookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<BookItem[]>) => {
        state.books = action.payload;
      }
    );
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
