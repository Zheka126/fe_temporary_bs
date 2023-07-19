import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addAuthor, getAuthors } from 'src/api/requests/author';
import { AddAuthorRequest, AuthorType } from 'src/types/author';

export const getAuthorsThunk = createAsyncThunk('getAuthorsThunk', async () => {
  try {
    const { data } = await getAuthors();
    return data;
  } catch (err) {
    throw Error('Something went wrong');
  }
});

export const addAuthorThunk = createAsyncThunk('addAuthorThunk', async (author: AddAuthorRequest) => {
  try {
    await addAuthor(author);
    // return author;
  } catch (err) {
    throw Error('Something went wrong');
  }
});

export interface AuthorsState {
  authors: AuthorType[];
}

const initialState: AuthorsState = {
  authors: [],
};

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAuthorsThunk.fulfilled,
      (state, action: PayloadAction<AuthorType[]>) => {
        state.authors = action.payload;
      }
    );
  },
});

// export const {} = bookSlice.actions;

export default authorsSlice.reducer;
