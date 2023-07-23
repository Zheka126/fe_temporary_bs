import styled from 'styled-components';

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
  &::-webkit-search-cancel-button {
    padding-left: 10px;
    cursor: pointer;
    font-size: 18px;
  }
`;

export const GenresContainer = styled.div`
  height: 150px;
  width: 200px;
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
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
  input {
    cursor: pointer;
  }
  label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
`;

export const NoGenresOrErr = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const GenresLoaderContainer = styled.div`
  ${({ theme }) => theme.flexStyles('start', 'center')}
`;
