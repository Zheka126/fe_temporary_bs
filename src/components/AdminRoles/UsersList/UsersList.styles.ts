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
  padding: 10px 0;
  align-items: center;
  border-radius: 10px;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
  p {
    margin: 0;
  }
`;

export const UserItemButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const BaseButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    color: white;
  }
`;

export const AssignButton = styled(BaseButton)`
  background-color: lightgreen;
`;
export const RemoveButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.red};
`;
