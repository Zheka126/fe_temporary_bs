export interface AssignmentType {
  id: string;
  bookId: string | undefined;
  userId: string | undefined
  requestDate: string
  status: string;
}

export interface GetAssignmentsResponse {
  data: AssignmentType[];
  totalRecords: number;
}

export interface ApproveRejectAssignmentRequest {
  assId: string;
  type: 'approve' | 'reject';
}
