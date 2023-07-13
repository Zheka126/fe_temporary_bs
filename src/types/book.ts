export interface BookType {
  img: string;
  title: string;
  author: string;
  genres: string[];
  uploadedBy: string;
  publicationDate: string;
  language: string;
  description: string;
  availability: string;
}

export interface FilterValues {
  search: string;
  genre: {
    [key: string]: boolean;
  };
  status: {
    [key: string]: boolean;
  };
  selectedRating: number | null;
  currentPage: number;
}