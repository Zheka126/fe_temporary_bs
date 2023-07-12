import { instance } from '../instance';

const endPoint = '/roles';
type Role = 'admin' | 'user';

export const getRoles = () => instance.get<string[]>(endPoint);
export const updateRole = (id: string, role: Role) =>
  instance.put(`${endPoint}/${id}/${role}`);
