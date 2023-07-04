import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "./redux/store";
import { openRoutes, privateRoutes } from "./routes";
import { theme } from "./theme";

export const App = () => {

  return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              {[...openRoutes, ...privateRoutes].map(
                ({ path, component: Component }) => {
                  return (
                    <Route key={path} path={path} element={<Component />} />
                  );
                }
              )}
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
  );
};
