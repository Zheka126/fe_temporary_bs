import { GetAssignmentsResponse } from 'src/types/assignments';

import { instance } from '../instance';

const endpoint = 'assignments'

export const getAssignments = () => {
  return instance.get<GetAssignmentsResponse>(`/${endpoint}/pendings`);
};
