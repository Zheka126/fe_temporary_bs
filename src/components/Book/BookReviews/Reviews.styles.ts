import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 50px; */
`;

export const BookReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Username = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;

  img {
    margin-right: 10px;
    width: 30px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 0;
  font-weight: 500;
`;
export const Date = styled.span`
font-size: 14px;`;

export const Content = styled.p`
max-width: 600px;
font-size: 18px;`;
