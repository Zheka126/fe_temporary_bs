import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { store } from './redux/store';

const themes = {
  color: {
    gray: '#fff',
    black: '111',
  },
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={themes}>
          <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route index element={<MainPage />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
