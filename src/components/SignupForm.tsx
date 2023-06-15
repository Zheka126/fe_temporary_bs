import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { styled } from 'styled-components';
import Input from './Input';
import Button from './Button';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, "Should be from 3 to 30 letters or symbols(space, -, ')")
          .max(30, "Should be from 3 to 30 letters or symbols(space, -, ')")
          .required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <StyledForm>
        <Input name="firstName" type="text" placeholder="First name" />
        <Input name="lastName" type="text" placeholder="Last name" />
        <Input name="username" type="text" placeholder="Enter username" />
        <Input name="email" type="email" placeholder="Enter email" />
        <Input name="password" type="password" placeholder="Enter password" />
        <Input name="repeatPassword" type="password" placeholder="Repeat password" />

        <ButtonsContainer>
          <Button type="submit" title="Sign up" callback={() => console.log('work')} />
          <Button type="submit" title="Log in" callback={() => console.log('work')} />
        </ButtonsContainer>
      </StyledForm>
    </Formik>
  );
}
