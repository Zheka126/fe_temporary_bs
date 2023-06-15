import { ErrorMessage, Field } from 'formik';
import { styled } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  margin-bottom: 30px;
`;

export const StyledInput = styled(Field)`
  width: 100%;

  padding: 15px 25px;
  outline: ${({ error }) => (error ? '1px solid red' : 'none')};
  border: none;
  border-radius: 1px;

  &:hover {
    box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.08);
  }

  &:focus {
    outline: 1px solid #9d9d9d;
    box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.08);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -23px;
  color: #de6b67;
  font-size: 14px;
`;
