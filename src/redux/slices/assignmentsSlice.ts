import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAssignments, handleAssignments } from 'src/api/requests/assignments';
import { ApproveRejectAssignmentRequest, AssignmentType } from 'src/types/assignments';

export const getAssignmentsThunk = createAsyncThunk(
  'getAssignmentsThunk',
  async (page: number) => {
    try {
      const { data: { data } } = await getAssignments(page);
      return data;
    } catch (err: any) {
      throw Error('Some error occured');
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
}

const initialState: AssignmentsState = {
  assignments: [
    // {
    //   id: '1',
    //   bookId: "a9bf1e97-40bc-46aa-8ce8-95832dd76375",
    //   userId: "0a074ab6-10be-4aff-bdb3-eefbc9d04903",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '2',
    //   bookId: "32910591-271a-4264-959d-7031f71fdd26",
    //   userId: "27d2bc57-b65b-49f1-bf2b-11525486960a",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '3',
    //   bookId: "f10e5d08-ec85-47cb-b357-6ac186cc0211",
    //   userId: "27d2bc57-b65b-49f1-bf2b-11525486960a",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '4',
    //   bookId: "f10e5d08-ec85-47cb-b357-6ac186cc0211",
    //   userId: "53d426a9-2999-48e8-9f71-0831e88eb0bd",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '5',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '6',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '7',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '8',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '9',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '10',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '11',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '12',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
    // {
    //   id: '13',
    //   bookId: "5d530597-b811-4fd5-af32-0e955fead82a",
    //   userId: "c1bcc5bd-0bef-49eb-824f-f0c3b2037b7d",
    //   requestDate: '1999-11-26',
    //   startDate: '1999-11-26',
    //   endDate: '1999-11-26',
    //   status: 'PENDING',
    // },
  ],
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
      (state, action: PayloadAction<AssignmentType[]>) => {
        state.assignments = action.payload;
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
