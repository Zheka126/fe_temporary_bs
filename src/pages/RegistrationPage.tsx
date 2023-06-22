import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import { SignupForm } from '../components/SignupForm/SignupForm';

export const RegistrationPage = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};