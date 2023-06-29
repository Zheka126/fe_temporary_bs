import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from './redux/store';
import { openRoutes, privateRoutes } from './routes';
import { theme } from './theme';

interface RouteProps {
  path: string;
  component: () => JSX.Element;
}

const createRoute = ({ path, component }: RouteProps) => {
  return <Route key={path} path={path} element={component()} />;
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            {openRoutes.map((route) => createRoute(route))}
            {privateRoutes.map((route) => createRoute(route))}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
