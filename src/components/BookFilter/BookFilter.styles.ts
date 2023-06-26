import styled from 'styled-components';

export const StarsList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  padding: 0;
`;

export const StarItem = styled.li<{ isclicked: boolean }>`
  cursor: pointer;
  svg {
    path {
      fill: ${({ isclicked, theme }) =>
        isclicked ? '#fde16d' : theme.colors.gray};
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
  input {
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
`
