import { GetRolesResponse, UpdateRoleRequest } from 'src/types/roles';

import { instance } from '../instance';

export const getRoles = (page: number) => {
  return instance.get<GetRolesResponse>('/users', {
    params: {
      ...(page !== 1 ? { Page: page } : {}),
    },
  });
};

export const updateRole = ({ userId, role }: UpdateRoleRequest) => {
  return instance.put<string>(`/roles/manage?UserId=${userId}&Role=${role}`);
};
