import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { getUserTokenData } from "./helpers";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { isAuthSelector, setUser } from "./redux/slices/authSlice";
import { openRoutes, privateRoutes } from "./routes";
import { theme } from "./theme";

interface IRoute {
  component: () => JSX.Element;
  path: string;
}

export const App = () => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(isAuthSelector);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = getUserTokenData(token);

      dispatch(setUser(user));
    }
  }, [dispatch]);

  const renderRoutes = (routes: IRoute[]) => {
    return routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {renderRoutes(openRoutes)}

        {isAuth ? renderRoutes(privateRoutes) : null}
      </Routes>
    </ThemeProvider>
  );
};
