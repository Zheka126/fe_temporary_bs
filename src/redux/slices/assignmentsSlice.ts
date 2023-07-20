import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAssignments, handleAssignments } from 'src/api/requests/assignments';
import { ApproveRejectAssignmentRequest, AssignmentType, GetAssignmentsResponse } from 'src/types/assignments';

export const getAssignmentsThunk = createAsyncThunk(
  'getAssignmentsThunk',
  async (page: number) => {
    try {
      const { data } = await getAssignments(page);
      console.log(data.data);
      
      return data;
    } catch (err: any) {
      throw Error('Can\'t get assignments');
    }
  }
);

export const onHandleAssignmentThunk = createAsyncThunk(
  'onHandleAssignmentThunk',
  async (handleAssPayload: ApproveRejectAssignmentRequest) => {
    try {
      await handleAssignments(handleAssPayload);
      return handleAssPayload.assId;
    } catch (err: any) {
      throw Error('Some error occured');
    }
  }
);

interface AssignmentsState {
  assignments: AssignmentType[];
  totalRecords: number
}

const initialState: AssignmentsState = {
  assignments: [],
  totalRecords: 0
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
    builder
    .addCase(
        getAssignmentsThunk.fulfilled,
      (state, action: PayloadAction<GetAssignmentsResponse>) => {
        state.assignments = action.payload.data
        state.totalRecords = action.payload.totalRecords
      }
    )
    .addCase(
      onHandleAssignmentThunk.fulfilled,
      (state, action: PayloadAction<string>) => {
        const assignmentId = action.payload
        state.assignments = state.assignments.filter(ass => ass.id !== assignmentId);
      }
    );
  },

});

// export const { setAssignments } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
