import { AuthorType } from './author';
import { GenreType } from './genre';

export enum AvailabilityStatus {
  FREE = 'Free',
  BUSY = 'Busy',
}

export enum Language {
  ENGLISH = 'English',
  ROMANIAN = 'Romanian',
  RUSSIAN = 'Russian',
}

export interface BookType {
  id: string;
  imageSrc: string;
  title: string;
}

export interface GetBooksResponse {
  data: BookType[];
  totalRecords: number;
}

// can we make this interface reusable for request and for response?
// like making some fields unrequired
export interface BookDetailsType {
  id: string | undefined;
  imageSrc: string;
  title: string;
  authors: AuthorType[];
  genres: GenreType[];
  canBorrow: boolean;
  uploadedBy: string;
  publicationDate: string;
  language: Language;
  availability: AvailabilityStatus;
  description: string;
}

// export type BookDetailsUpdateRequest = Omit<
//   BookDetailsType,
//   'canBorrow' | 'uploadedBy'
// >;

export interface BookDetailsUpdateRequest {
  bookId: string | undefined;
  image: File | null;
  title: string;
  authorId: string[];
  genreId: string[];
  publicationDate: string;
  language: Language;
  availability: AvailabilityStatus;
  description: string;
}

export interface FilterValues {
  // search: string[];
  genre: string[];
  status: string[];
  selectedRating: number | null;
  currentPage: number;
}

export interface AddBookRequest {
  title: string;
  description: string;
  authorId: string[];
  genreId: string[];
  language: string;
  publicationDate: string;
  image: File | null;
}
