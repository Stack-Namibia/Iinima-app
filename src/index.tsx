import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { history } from "./utils";
import store from "./store";
import "./index.css";
import App from "./App";
import config from "./settings/config";

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

const onRedirectCallBack = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// const providerConfig = {
//   domain: config.AUTH0_DOMAIN as string,
//   clientId: config.AUTH0_CLIENT_ID as string,
//   onRedirectCallBack,
//   authorizationParams: {
//     redirect_uri: window.location.origin,
//     audience: config.AUTH0_AUDIENCE,
//   },
// };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Auth0Provider
          domain='dev-wcqfxo8a0qx5y8su.us.auth0.com'
          clientId='1Uzut7tXOhlpoz8BknEukWXFzAHfRExo'
          onRedirectCallback={onRedirectCallBack}
          authorizationParams={{
            redirect_uri: window.location.origin,
            audience: "https://iinima.app",
          }}
          cookieDomain='iinima.app'
          useRefreshTokens={true}
          cacheLocation='memory'
        >
          <App />
        </Auth0Provider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
