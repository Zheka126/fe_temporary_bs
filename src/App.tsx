import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { css, ThemeProvider } from 'styled-components';

import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { store } from './redux/store';
import { Container } from './styles';

const theme = {
  colors: {
    black: '#1a1a1a',
    lightGray: '#f7f7f7',
    gray: '#9d9d9d',
    red: '#de6b67',
  },

  flexStyles: (justifyContent = 'center', alignItems = 'center') => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/main"
              element={
                <Container>
                  <MainPage />
                </Container>
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
