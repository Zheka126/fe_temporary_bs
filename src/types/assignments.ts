export interface AssignmentType {
  id: string;
  bookId?: string;
  userId?: string;
  requestDate: string;
  startDate: string;
  endDate: string;
  status: string;
}

export interface GetAssignmentsResponse {
    data: AssignmentType[]
}

export interface ApproveRejectAssignmentRequest {
  assId: string
  type: 'approve' | 'reject'
}