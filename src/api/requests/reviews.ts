import { instance } from '../instance';

const endpoint = '/reviews';

// depending on what type of data we get use type for this get
// there is a ReviewsResponse type in types folder
export const getAllReviews = async () => instance.get(endpoint);

export const deleteReview = async (id: string) =>
  instance.delete(`${endpoint}/${id}`);
