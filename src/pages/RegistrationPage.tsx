import { AuthLayout } from 'src/components/AuthLayout/AuthLayout';
import { SignupForm } from 'src/components/SignupForm/SignupForm';

export const RegistrationPage = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};