import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addBook, getBooks } from 'src/api/requests/book';
import { AddBookRequest, BookType, FilterValues, GetBooksResponse } from 'src/types/book';

export const getBooksThunk = createAsyncThunk(
  'getBooksThunk',
  async (filters: FilterValues) => {
    try {
      const { data } = await getBooks(filters);
      return data;
    } catch (err) {
      throw Error('Something went wrong');
    }
  }
);

export const addBookThunk = createAsyncThunk('addBookThunk', async (book: AddBookRequest) => {
  try {
    await addBook(book);
    // return author;
  } catch (err) {
    throw Error('Something went wrong');
  }
});


export interface BookState {
  books: BookType[];
  totalRecords: number;
}

const initialState: BookState = {
  books: [],
  totalRecords: 0,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<BookType[]>) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getBooksThunk.fulfilled,
      (state, action: PayloadAction<GetBooksResponse>) => {
        state.books = action.payload.data;
        state.totalRecords = action.payload.totalRecords;
      }
    );
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
