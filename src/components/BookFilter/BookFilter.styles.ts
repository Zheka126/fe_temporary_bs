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
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.gray};
  outline: 0;
  border: 0;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 20px;
  color: white;
  &::placeholder {
    color: white;
  }
`;
