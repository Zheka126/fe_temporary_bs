import { Container } from 'src/components/common/Container.styles';

import { AddReviewForm } from './AddReviewForm/AddReviewForm';
import { Reviews } from './Reviews';
import { ReviewsContainer, SectionTitle } from './Reviews.styles';

export const ReviewsSection = () => {
  return (
    <Container>
      <SectionTitle>Reviews</SectionTitle>
      <ReviewsContainer>
        <Reviews />
        <AddReviewForm />
      </ReviewsContainer>
    </Container>
  );
};
