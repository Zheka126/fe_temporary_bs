import { SignupForm } from '../components/SignupForm/SignupForm';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';

export const RegistrationPage = () => {
  return (
    <div>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    </div>
  );
};
