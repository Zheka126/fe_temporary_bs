import styled from 'styled-components';

export const StyledUsersList = styled.div`
  display: grid;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
`;
export const UserItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px 0;
  align-items: center;
  font-weight: 500;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
  span {
    padding: 10px 0;
  }
  p {
    margin: 0;
  }
`;

const BaseButton = styled.button<{ disabled: boolean }>`
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  font-weight: 600;
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

export const AssignButton = styled(BaseButton)`
  background-color: lightgreen;
`;
export const RemoveButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.red};
`;

export const ButtonLoaderWrapper = styled.div`
  display: flex;
  justify-content: start;
`