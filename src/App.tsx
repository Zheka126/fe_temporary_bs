import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from './components';
import { useAppDispatch } from './redux/hooks';
import { setUser } from './redux/slices/authSlice';
import { theme } from './theme';
import { getUserTokenData } from './utils';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = getUserTokenData(token);
      dispatch(setUser(user));
    }
    // why do we need dispatch here?
    // maybe it should be token?
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
