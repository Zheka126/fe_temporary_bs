import styled from 'styled-components';

export const StyledAssignmentsList = styled.ul`
  display: grid;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
`;

export const AssignmentItem = styled.li`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  padding: 5px 0;
  align-items: center;
  font-weight: 500;
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  span {
    padding: 10px 0;
  }
`;
