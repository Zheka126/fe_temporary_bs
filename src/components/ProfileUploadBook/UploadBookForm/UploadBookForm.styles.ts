import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto 300px;
  grid-column-gap: 50px;
`;

export const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  padding: 10px;
  position: relative;
  input {
    visibility: hidden;
  }
  img {
    border-radius: 10px;
    width: 150px;
    height: 150px;
  }
`;

export const EmptyImageBlock = styled.div<{ isError: boolean }>`
  border: ${({ isError }) => (isError ? '1px solid red' : '')};
  border-radius: 10px;
  background-color: white;
  width: 150px;
  height: 200px;
  position: relative;
  span {
    top: 10px;
    left: 10px;
  }
`;

export const UploadImgBtn = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddBookGetAuthorsErr = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 500;
`;

export const PublicationDateText = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const InputDate = styled.input<{ isError: boolean }>`
  border: ${({ isError }) => (isError ? '1px solid red' : '')};
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const commonButtonStyles = `
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  `;

export const UploadBtn = styled.button`
  ${commonButtonStyles}
  background-color: lightgreen;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: initial;
    &:hover {
      filter: none;
    }
  }
`;

export const CancelBtn = styled.button`
  ${commonButtonStyles}
  background-color: ${({ theme }) => theme.colors.red};
`;

export const AddBookLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 6.5px 0;
  width: 100%;
`;
