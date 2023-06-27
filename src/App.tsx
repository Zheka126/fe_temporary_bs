import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from './redux/store';
import { openRoutes, privateRoutes } from './routes';
import { theme } from './theme';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            {openRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
                );
              })}
            {
              privateRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              })
            }
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
