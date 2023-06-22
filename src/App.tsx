import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LoginPage } from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { store } from './redux/store';

const theme = {
  colors: {
    black: '#1a1a1a',
    lightGray: '#f7f7f7',
    outline: '#9d9d9d',
    error: '#de6b67',
  },
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
