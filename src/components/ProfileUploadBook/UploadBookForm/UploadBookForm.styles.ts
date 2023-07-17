import Select, { GroupBase, StylesConfig } from 'react-select';
import { SelectValue } from 'src/types/select';
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
  height: 150px;
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

export const PublicationDateText = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const InputDate = styled.input<{ isError: boolean }>`
  border: ${({ isError }) => (isError ? '1px solid red' : '')};
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

export const selectStyles = (border?: any) => ({
  control: (baseStyles) => ({
    ...baseStyles,
    fontSize: '14px',
    // border: border ? 'red' : 'none',
    border: border ? '1px solid #de6b67' : 'none',
    fontWeight: '400',
    paddingLeft: '13px',
    boxShadow: 'none',
    transition: '0.2s',
    backgroundColor: '#f7f7f7',
    borderRadius: 'none',
    '&:hover': {
      backgroundColor: '#D1D1D1',
      border: 'none',
    },
    '&:focus': {
      background: '#F6F6F6',
      boxShadow: '0px 0px 5px #D9D9D9',
      border: 'none',
    },
    cursor: 'pointer',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#C60E2E' : 'white',
    fontWeight: '500',
    color: state.isSelected ? 'white' : '#9C9C9C',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: '#FF768E',
      color: 'white',
    },
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: 'inherit',
  }),
  loadingIndicator: (baseStyles) => ({
    ...baseStyles,
    color: 'inherit',
  }),
  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    color: 'inherit',
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    flexWrap: 'nowrap',
  }),
  multiValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#E4163A',
    borderRadius: '4px',
    color: 'white',
    minWidth: '25%',
    display: 'flex',
    justifyContent: 'space-between',
  }),
  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    color: 'white',
    fontSize: '15px',
    lineHeight: '19px',
    fontFamily: 'Avenir, sans-serif',
  }),
  multiValueRemove: (baseStyles) => ({
    ...baseStyles,
  }),
});
