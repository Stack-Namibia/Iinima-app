import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./store";
import "./index.css";
import App from "./App";
import { configs } from "./settings/configs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme({
  palette: {
    primary: {
      light: "#D63E3E",
      main: "#D63E3E",
      dark: "#D63E3E",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Auth0Provider
          {...configs.auth0}
          cookieDomain='iinima.app'
          useRefreshTokens={true}
          cacheLocation='localstorage'
        >
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Auth0Provider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
