import { AuthLayout } from 'src/components/AuthLayout/AuthLayout';
import { LoginForm } from 'src/components/LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
