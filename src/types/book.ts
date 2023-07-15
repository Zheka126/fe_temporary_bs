export interface BookDetailsType {
  id: string | undefined;
  imageSrc: string;
  title: string;
  authors: string;
  canBorrow: boolean;
  genres: string;
  uploadedBy: string;
  publicationDate: string;
  language: string;
  description: string;
  availability: string;
}

export interface GetBooksResponse {
  data: BookType[];
  totalRecords: number;
}

export interface BookType {
  id: string
  imageSrc: string
  title: string
}

export interface FilterValues {
  search: string[];
  genre: string[];
  status: string[]
  selectedRating: number | null;
  currentPage: number;
}
