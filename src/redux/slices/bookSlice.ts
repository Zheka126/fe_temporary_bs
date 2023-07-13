import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBooks } from 'src/api/requests/book';
import { BookItem } from 'src/types/BookItem';
import { FilterValues } from 'src/types/FilterValues';

export const getBooksThunk = createAsyncThunk(
  'getBooksThunk',
  async (filters: FilterValues) => {
    try {
      const { data } = await getBooks(filters);
      console.log(data);
      
      return data;
    } catch (err) {
      throw Error('Something went wrong');
    }
  }
);

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
      getBooksThunk.fulfilled,
      (state, action: PayloadAction<BookItem[]>) => {
        state.books = action.payload;
      }
    );
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
