import styled from 'styled-components';

export const StyledAssignmentsList = styled.div`
  display: grid;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  max-height: 350px;
  overflow: auto;
  ${({ theme }) => theme.styledScrollbar};
`;

export const ProAssItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  padding: 5px 0;
  align-items: center;
  font-weight: 500;
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  span {
    padding: 10px 10px;
  }
`;

export const AssignmentStatus = styled.span<{ status: string }>`
  background-color: ${({ status, theme }) =>
    status === 'ACTIVE'
      ? 'lightgreen'
      : status === 'REJECTED'
      ? theme.colors.red
      : '#D7D7B8'};
  text-align: center;
  border-radius: 5px;
  width: fit-content;
  `;
  
  export const ActionsBtn = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  width: fit-content;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
`;
