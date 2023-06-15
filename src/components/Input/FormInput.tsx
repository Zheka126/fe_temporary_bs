import { Field } from 'formik';
import { InputContainer, StyledErrorMessage, StyledInput } from './FormInput.styles';

// how to reuse Input now...
export default function FormInput({ id, name, type, placeholder }) {
  return (
    <InputContainer>
      <Field name={name}>
        {({ field, form }) => {
          const { touched, errors } = form;
          const error = touched[name] && errors[name];
          return (
            <>
              <StyledInput {...field} id={id} type={type} placeholder={placeholder} error={error} />
              <StyledErrorMessage name={name} component={'span'} />
            </>
          );
        }}
      </Field>
    </InputContainer>
  );
}
