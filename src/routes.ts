import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';

export const openRoutes = [
  {
    component: RegistrationPage,
    path: '/registration',
  },
  {
    component: LoginPage,
    path: '/login',
  },
];

const privateRoutes = [];
