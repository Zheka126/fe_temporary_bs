import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getBookReviews } from 'src/api/requests/book';
import { ReviewType } from 'src/types/review';

import { Review } from './Review';
import { BookReviewsList } from './Reviews.styles';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getBookReviews(id);
        console.log('data: ', data);
        setReviews(data.data);
      } catch (err: any) {
        // toast.error('Some errors with getting book reviews');
        setError('Oops! Something went wrong with loading reviews...😓');
        console.log(err.message);
      }
    })();
  }, []);


  if (error) {
    return <h2>{error}</h2>;
  }
  if (reviews.length === 0) {
    return <h2>No reviews yet... Why don't you add yours?</h2>;
  }

  return (
    <BookReviewsList>
      {reviews.map((review) => (
        <Review key={review.reviewId} review={review} />
      ))}
    </BookReviewsList>
  );
};
