import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegistrationPage } from './pages/RegistrationPage';

export const openRoutes = [
  { component: RegistrationPage, path: '/registration' },
  { component: LoginPage, path: '/login' },
];

export const privateRoutes = [
  { component: MainPage, path: '/main' },
  { component: ProfilePage, path: '/profile/*' },
  { component: AdminPage, path: '/admin/*' },
];
