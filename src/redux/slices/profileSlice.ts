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
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'REJECTED',
    },
    {
      id: '2',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'PENDING',
    },
    {
      id: '3',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '4',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'PENDING',
    },
    {
      id: '5',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '6',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '7',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '8',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '9',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '10',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '11',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '12',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
    {
      id: '13',
      title: 'test',
      startDate: null,
      endDate: null,
      status: 'ACTIVE',
    },
  ],
  totalAssignmentsRecords: 0,
  myBooks: [
    {
      id: '1',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '2',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '3',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '4',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '5',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '6',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '7',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '88',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '9',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '10',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '11',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '12',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '13',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '14',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '15',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '16',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
    {
      id: '17',
      imageSrc:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      title: 'test book',
    },
  ],
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
