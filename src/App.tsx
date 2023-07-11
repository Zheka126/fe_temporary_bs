import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './redux/hooks';
import { isAuthSelector, setUser } from './redux/slices/authSlice';
import { openRoutes, privateRoutes } from './routes';
import { getUserTokenData } from './utils';

interface RouteType {
  component: () => JSX.Element;
  path: string;
}

interface RouteProps {
  path: string;
  component: () => JSX.Element;
}

const createRoute = ({ path, component }: RouteProps) => {
  return <Route key={path} path={path} element={component()} />;
};

export const App = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = getUserTokenData(token);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const renderRoutes = (routes: RouteType[]) => {
    return routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ));
  };

  return (
    <Routes>
      {renderRoutes(openRoutes)}
      {isAuth ? renderRoutes(privateRoutes) : null}
    </Routes>
  );
};
