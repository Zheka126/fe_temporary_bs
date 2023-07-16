import {
  ApproveRejectAssignmentRequest,
  GetAssignmentsResponse,
} from 'src/types/assignments';

import { instance } from '../instance';

const endpoint = 'assignments';

export const getAssignments = (Page: number) => {
  return instance.get<GetAssignmentsResponse>(`/${endpoint}/pendings`, {
    params: {
      ...(Page !== 1 ? { Page } : {}),
    },
  });
};

export const handleAssignments = ({
  assId,
  type,
}: ApproveRejectAssignmentRequest) => {
  return instance.post(`/${endpoint}/${assId}/${type}`);
};
