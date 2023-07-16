import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  width: 100%;
  padding-top: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(Link)<{ isactive: boolean }>`
  text-decoration: none;
  padding: 5px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightGray};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    color: white;
  }
  ${({ isactive, theme }) =>
    isactive &&
    `
      background-color: ${theme.colors.gray};
      color: white;
    `}
`;
