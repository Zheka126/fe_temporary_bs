import { Field } from 'formik';
import { styled } from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  color: black;
`;

const StyledInput = styled(Field)`
  width: 100%;
  margin: 10px 0;
  padding: 15px 25px;
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  outline: none;
  background-color: #f7f7f7;
  border-radius: 1px;

  &:hover {
    box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.03);
  }

  &:focus {
    outline: 1px solid #9d9d9d;
  }
`;

// type InputProps = {
//   name: string;
//   type: string;
//   placeholder: string;
// };

// how to reuse Input now...
export default function Input({ name, type, placeholder, error }) {
  return (
    <InputContainer>
      <StyledInput name={name} type={type} placeholder={placeholder} error={error} />
    </InputContainer>
  );
}
