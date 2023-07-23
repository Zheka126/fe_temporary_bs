export interface ProfileType {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

export interface ProfileAssignmentType {
  id: string;
  title: string;
  startDate: string | null;
  endDate: string | null;
  status: string;
}

export interface GetProfileAssignmentsResponse {
  data: ProfileAssignmentType[];
  totalRecords: number
}

export interface ProfileMyBookType {
  id: string
  imageSrc: string
  title: string
}

export interface GetProfileMyBooksResponse {
  data: ProfileMyBookType[]
  totalRecords: number
}

