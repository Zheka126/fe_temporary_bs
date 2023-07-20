import styled from 'styled-components';

import { StyledButton } from '../common/Button/Button.styles';
import { StyledInput } from '../common/Input.styles';

export const BookDetailsContainer = styled.div`
  display: flex;
  gap: 200px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 30px;

  h1 {
    margin-top: 0;
  }
`;

export const BookCoverSection = styled.div`
  flex: 0.3;

  img {
    width: 100%;
  }
`;

export const BookDetailsSection = styled.div`
  flex: 0.4;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BookDetailItem = styled.div`
  max-width: 330px;
  margin: 20px 0;
  color: #596d82;

  p {
    margin: 0;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`;

export const BookGenreTag = styled.span`
  margin-right: 5px;
  padding: 1px 10px;
  color: white;
  background-color: #111;
  border-radius: 8px;
`;

export const EditInput = styled(StyledInput)`
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledModalContent = styled.div`
  display: flex;
  gap: 50px;
`;

export const CancelButton = styled(StyledButton)`
  background-color: #ccc; /* Сероватый цвет */
`;
