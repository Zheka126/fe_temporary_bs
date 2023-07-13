import styled from 'styled-components';

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

export const GenresContainer = styled.div`
  height: 100px;
  width: fit-content;
  padding-right: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
` 
