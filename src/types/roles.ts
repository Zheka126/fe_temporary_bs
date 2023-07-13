export interface Role {
  id: string;
  username: string;
  role: string;
}

export interface GetRolesResponse {
  data: Role[];
  totalRecords: number;
}

export interface UpdateRoleRequest {
  userId: string;
  role: "Admin" | "User";
}