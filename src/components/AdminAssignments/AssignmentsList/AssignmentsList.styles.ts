import styled from 'styled-components';

export const StyledAssignmentsList = styled.ul`
  display: grid;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  max-height: 400px;
  overflow: auto;
`;

export const AssignmentItem = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

export const AssignmentsButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const BaseButton = styled.button<{ disabled: boolean }>`
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
  border: 0;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    ${({ disabled }) =>
      disabled
        ? 'none'
        : `box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    color: white;`}
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: initial;
  }
`;

export const ApproveRejectBtn = styled(BaseButton)<{ btnType: 'Reject' | 'Approve' }>`
  background-color: ${({ btnType, theme }) => btnType === 'Reject' ? theme.colors.red : 'lightgreen'};
`;
// export const ApproveButton = styled(BaseButton)`
//   background-color: lightgreen;
// `;
// export const RejectButton = styled(BaseButton)`
//   background-color: ${({ theme }) => theme.colors.red};
// `;
