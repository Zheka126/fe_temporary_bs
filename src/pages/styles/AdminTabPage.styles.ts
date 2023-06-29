import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  a {
    text-decoration: none;
    padding: 5px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.lightGray};
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
      color: white;
    }
  }
`;