import styled from 'styled-components';

export const StarsList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  padding: 0;
`;

export const StarItem = styled.li<{ filled: boolean }>`
  cursor: pointer;
  svg {
    path {
      fill: ${({ filled, theme }) => (filled ? '#fde16d' : theme.colors.gray)};
    }
  }
`;
