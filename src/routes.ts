import { AdminTabPage } from './pages/AdminTabPage';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { RegistrationPage } from './pages/RegistrationPage';

export const openRoutes = [
  { component: RegistrationPage, path: '/registration' },
  { component: LoginPage, path: '/login' },
  { component: MainPage, path: '/main' },
];

export const privateRoutes = [
  {
    component: MainPage,
    path: '/main',
  },
  {
    component: AdminTabPage,
    path: '/admin_tab/*',
  },
];
