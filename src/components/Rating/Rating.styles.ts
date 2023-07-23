import styled from 'styled-components';

export const StyledStarsList = styled.ul<{ filled?: boolean }>`
  display: flex;
  gap: 5px;
  list-style: none;
  padding: 0;
  svg {
    path {
      fill: ${({ filled, theme }) => (filled ? '#fde16d' : theme.colors.gray)};
    }
  }
`;

export const StarItem = styled.li<{ filled: boolean }>`
  cursor: pointer;
  svg {
    path {
      fill: ${({ filled, theme }) => (filled ? '#fde16d' : theme.colors.gray)};
    }
  }
`;
