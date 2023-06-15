import AuthLayout from '../components/AuthLayout/AuthLayout';
import SignupForm from '../components/SignupForm/SignupForm';

export default function LoginPage() {
  return (
    <div>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    </div>
  );
}
