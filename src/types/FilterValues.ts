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
