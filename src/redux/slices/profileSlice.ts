import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfileAssignments, getProfileMyBooks } from 'src/api/requests/profile';
import { GetProfileAssignmentsResponse, GetProfileMyBooksResponse, ProfileAssignmentType, ProfileMyBookType } from 'src/types/profile';

export const getProfileAssignmentsThunk = createAsyncThunk(
  'getProfileAssignmentsThunk',
  async (currentPage: number) => {
    try {
      const { data } = await getProfileAssignments(currentPage);
      return data;
    } catch (error) {
      throw Error("Can't get profile assignments");
    }
  }
);

export const getProfileMyBooksThunk = createAsyncThunk(
  'getProfileMyBooksThunk',
  async (currentPage: number) => {
    try {
      const { data } = await getProfileMyBooks(currentPage);
      return data;
    } catch (error) {
      throw Error("Can't get profile books");
    }
  }
);

export interface ProfileState {
  assignments: ProfileAssignmentType[];
  totalAssignmentsRecords: number
  myBooks: ProfileMyBookType[],
  totalMyBooksRecords: number,
}

const initialState: ProfileState = {
  assignments: [
    {
      id: '1',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '2',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '3',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'PENDING',
    },
    {
      id: '4',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '5',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '6',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '7',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '8',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '9',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '10',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '11',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '12',
      title: 'some random assignment',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
  ],
  totalAssignmentsRecords: 0,
  myBooks: [],
  totalMyBooksRecords: 0,
};

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(
      getProfileAssignmentsThunk.fulfilled,
      (state, action: PayloadAction<GetProfileAssignmentsResponse>) => {
        state.assignments = action.payload.data ;
        state.totalAssignmentsRecords = action.payload.totalRecords
      }
    )
    .addCase(
        getProfileMyBooksThunk.fulfilled,
      (state, action: PayloadAction<GetProfileMyBooksResponse>) => {
        state.myBooks = action.payload.data
        state.totalMyBooksRecords = action.payload.totalRecords
      }
    )
  },
});

// export const {} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
