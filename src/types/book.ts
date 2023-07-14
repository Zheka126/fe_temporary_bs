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
  search: string;
  genre: string[];
  status: string[]
  selectedRating: number | null;
  currentPage: number;
}
