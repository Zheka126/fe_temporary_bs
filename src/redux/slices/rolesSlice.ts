import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRoles, updateRole } from 'src/api/requests/role';
import { GetRolesResponse, Role, UpdateRoleRequest } from 'src/types/roles';

export const getRolesThunk = createAsyncThunk(
  'getRolesThunk',
  async (page: number) => {
    try {
      const { data } = await getRoles(page);
      return data;
    } catch (err) {
      throw Error('Some error occured');
    }
  }
);

export const updateRoleThunk = createAsyncThunk(
  'updateRoleThunk',
  async ({ userId, role }: UpdateRoleRequest) => {
    try {
      await updateRole({ userId, role });
      return { userId, role };
    } catch (err) {
      throw Error('Some error occured');
    }
  }
);

export interface RoleState {
  roles: Role[];
  totalRecords: number;
}

const initialState: RoleState = {
  roles: [],
  totalRecords: 0,
};

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getRolesThunk.fulfilled,
        (
          state,
          { payload: { data, totalRecords } }: PayloadAction<GetRolesResponse>
        ) => {
          state.roles = data;
          state.totalRecords = totalRecords;
        }
      )
      .addCase(
        updateRoleThunk.fulfilled,
        (state, action: PayloadAction<UpdateRoleRequest>) => {
          state.roles = state.roles.map((role) =>
            role.id === action.payload.userId ? { ...role, role: action.payload.role } : role
          );
        }
      );
  },
});

// export const {  } = rolesSlice.actions;

export default rolesSlice.reducer;
