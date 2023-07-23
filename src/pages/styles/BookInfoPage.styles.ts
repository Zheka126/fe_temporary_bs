import styled from 'styled-components';

export const BookInfoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // maybe?
  gap: 200px;
  background-color: ${({ theme }) => theme.colors.lightGray}; 

`;
