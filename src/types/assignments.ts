enum STATUS {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  QUEUED = 'QUEUED',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
}

export interface BookAssignmentType {
  id: string;
  title: string;
  startDate: string | null;
  endDate: string | null;
  status: STATUS;
}

export interface AssignmentType {
  id: string;
  bookId: string | undefined;
  userId: string | undefined;
  bookTitile: string;
  username: string;
  requestDate: string;
  status: STATUS;
}

export interface GetAssignmentsResponse {
  data: AssignmentType[];
  totalRecords: number;
}

export interface ApproveRejectAssignmentRequest {
  assId: string;
  type: 'approve' | 'reject';
}
