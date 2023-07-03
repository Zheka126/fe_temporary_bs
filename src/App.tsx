import axios from "axios";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "./redux/store";
import { openRoutes, privateRoutes } from "./routes";
import { theme } from "./theme";

export const App = () => {

  const testAddObj = async () => {
    await axios.post("http://localhost:3000/companies", {
      name: "Endava"
    });
  }
  const testDeleteObj = async () => {
    await axios.delete("http://localhost:3000/companies/4");
  }

  return (
    <>
      <button type="button" onClick={testAddObj}>create</button>
      <button type="button" onClick={testDeleteObj}>delete</button>
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
    </>
  );
};
