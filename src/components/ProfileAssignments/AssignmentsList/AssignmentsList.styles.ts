import styled from 'styled-components';

export const StyledAssignmentsList = styled.div`
  display: grid;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  max-height: 400px;
  overflow: auto;
  ${({ theme }) => theme.styledScrollbar};
`;

export const ProAssItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 5px 0;
  align-items: center;
  font-weight: 500;
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  span {
    padding: 10px 0;
  }
`;