import { ReviewsSection, SmartBookDetails } from 'src/components';

import { BookInfoPageContainer } from './styles/BookInfoPage.styles';

export const BookInfoPage = () => {
  return (
    <BookInfoPageContainer>
      <SmartBookDetails />
      <ReviewsSection />
    </BookInfoPageContainer>
  );
};
