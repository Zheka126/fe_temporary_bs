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

export const RolesPanel = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  padding-left: 20px;
  `;
  export const UsersList = styled.div`
  display: grid;
  grid-row-gap: 20px;
  `;
  export const UserItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  p {
    margin: 0;
  }
`;

export const UserItemButtons = styled.div`
  display: flex;
  gap: 10px;
`