export interface FilterValues {
  search: string;
  genre: {
    [key: string]: boolean;
  };
  status: { free: boolean; busy: boolean };
  selectedRating: number;
  currentPage: number;
}
