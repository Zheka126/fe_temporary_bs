export interface ReviewType {
  reviewId: string;
  title: string;
  username: string;
  content: string;
  rate: number;
}

export interface ReviewsResponse {
  data: ReviewType[];
  //   other fields...
}

export interface AddReviewRequest {
  bookId: string;
  title: string;
  content: string;
  rate: number;
}
