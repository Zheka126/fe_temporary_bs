export interface AuthorType {
  id: string;
  firstName: string;
  lastName: string;
}

export type AddAuthorRequest = Omit<AuthorType, 'id'>
