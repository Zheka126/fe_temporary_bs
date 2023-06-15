import { ErrorMessage, Field } from 'formik';
import { styled } from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled(Field)`
  width: 100%;
  border: none;
  outline: none;
  background-color: #f7f7f7;
  margin: 10px 0;
  padding: 15px 25px;
  box-sizing: border-box;
`;

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
};

export default function Input({ name, type, placeholder }: InputProps) {
  return (
    <InputContainer>
      <StyledInput name={name} type={type} placeholder={placeholder} />
      <ErrorMessage name="firstName" />
    </InputContainer>
  );
}
