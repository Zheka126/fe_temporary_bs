import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 20px;
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

export const EmptyImageBlock = styled.div`
border-radius: 10px;
background-color: white;
width: 150px;
height: 150px;
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
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
