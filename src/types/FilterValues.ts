export interface FilterValues {
  search: string;
  genre: { fiction: boolean; adventure: boolean };
  status: { free: boolean; busy: boolean };
  selectedRating: number;
  currentPage: number;
}
