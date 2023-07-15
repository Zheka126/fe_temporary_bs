import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAssignments } from 'src/api/requests/assignments';
import { AssignmentType } from 'src/types/assignments';

export const getAssignmentsThunk = createAsyncThunk(
  'getAssignmentsThunk',
  async () => {
    try {
      const { data: { data } } = await getAssignments();
      return data;
    } catch (err: any) {
      throw Error('Some error occured');
    }
  }
);

interface AssignmentsState {
  assignments: AssignmentType[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    // setAssignments: (state, action: PayloadAction<AssignmentType[]>) => {
    //   state.assignments = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
        getAssignmentsThunk.fulfilled,
      (state, action: PayloadAction<AssignmentType[]>) => {
        state.assignments = action.payload;
      }
    );
  },

});

// export const { setAssignments } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
