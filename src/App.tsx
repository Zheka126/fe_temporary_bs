import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultTheme, ThemeProvider, css } from 'styled-components';

import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { store } from './redux/store';

interface StyledTheme extends DefaultTheme {
  colors: {
    black: string;
    lightGray: string;
    outline: string;
    error: string;
  };
  flexStyles: (
    justifyContent?: string,
    alignItems?: string
  ) => ReturnType<typeof css>;
}

const theme: StyledTheme = {
  colors: {
    black: '#1a1a1a',
    lightGray: '#f7f7f7',
    outline: '#9d9d9d',
    error: '#de6b67',
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
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
