import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewAuthor, getAuthors } from 'src/api/requests/author';
import { AddAuthorRequest, AuthorType } from 'src/types/author';

export const getAuthorsThunk = createAsyncThunk('getAuthorsThunk', async () => {
  try {
    const { data } = await getAuthors();
    return data;
  } catch (err) {
    throw Error('Can not get authors. Please try again later');
  }
});

export const addAuthorThunk = createAsyncThunk(
  'addAuthorThunk',
  async (author: AddAuthorRequest) => {
    try {
      await addNewAuthor(author);
      // return author;
    } catch (err) {
      throw Error('Can not add new author. Please try again later');
    }
  }
);

export interface AuthorsState {
  authors: AuthorType[];
}

const initialState: AuthorsState = {
  authors: [],
};

export const authorSlice = createSlice({
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

export default authorSlice.reducer;
