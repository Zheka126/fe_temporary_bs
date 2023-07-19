import {
  AdminPage,
  BookDetailsPage,
  LoginPage,
  MainPage,
  RegistrationPage,
} from 'src/pages';
import { ProfilePage } from 'src/pages/ProfilePage';

export const openRoutes = [
  { component: RegistrationPage, path: '/registration' },
  { component: LoginPage, path: '/login' },
];

export const privateRoutes = [
  { component: MainPage, path: '/main' },
  { component: BookDetailsPage, path: '/books/:id' },
  { component: AdminPage, path: '/admin/*' },
  { component: ProfilePage, path: '/profile/*' },
];
