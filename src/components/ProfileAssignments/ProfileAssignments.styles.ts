import styled from 'styled-components';

export const ProfileAssignmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 34px);
`;

export const AssignmentsPanel = styled.ul`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  list-style: none;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  padding-left: 20px;
`;

export const ProAssLoadingContainer = styled.div`
  margin-top: 100px;
`;

export const ProNoAssignmentsOrErr = styled.div`
  ${({ theme }) => theme.flexStyles()};
  font-size: 32px;
  font-weight: 500;
  margin-top: 50px;
`;
