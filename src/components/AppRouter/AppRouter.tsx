import { Route, Routes } from 'react-router-dom';
import { openRoutes, privateRoutes } from 'src/components/AppRouter/routes';
import { useAppSelector } from 'src/redux/hooks';
import { isAuthSelector } from 'src/redux/slices/authSlice';

import { Header } from '..';

interface RouteType {
  component: () => JSX.Element;
  path: string;
}

const renderRoutes = (routes: RouteType[]) => {
  return routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));
};

export const AppRouter = () => {
  const isAuth = useAppSelector(isAuthSelector);
  console.log('isAuth: ', isAuth);

  return (
    <Routes>
      {renderRoutes(openRoutes)}

      <Route path="/" element={<Header />}>
        {isAuth && renderRoutes(privateRoutes)}
      </Route>
    </Routes>
  );
};
