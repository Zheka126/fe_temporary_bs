export type AvailableRoles = 'User' | 'Admin' | 'SuperAdmin';

export interface Role {
  id: string;
  username: string;
  role: AvailableRoles;
}

export interface GetRolesResponse {
  data: Role[];
  totalRecords: number;
}

export interface UpdateRoleRequest {
  userId: string;
  role: AvailableRoles;
}
