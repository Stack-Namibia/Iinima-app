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
import { createUser, fetchUser } from "./utils/api/accounts-service";
import { AuthActionTypes } from "./store/action-types/auth-action-type";
import { addUser } from "./store/action-creators";

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
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Auth0Provider
          {...configs.auth0}
          cookieDomain='iinima.app'
          useRefreshTokens={true}
          cacheLocation='memory'
          onRedirectCallback={async (appState, user) => {
            if (user?.sub) {
              try {
                const dbUser = await fetchUser(user?.sub);
                if (dbUser) {
                  store.dispatch({
                    type: AuthActionTypes.GET_USER,
                    payload: dbUser,
                  });
                }
              } catch (error: any) {
                switch (error.response.status) {
                  case 404:
                    window.history.replaceState(
                      {},
                      document.title,
                      "/register"
                    );
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                    break;

                  default:
                    console.error(error);
                    break;
                }
              }
            }
            window.history.replaceState(
              {},
              document.title,
              appState?.returnTo || window.location.pathname
            );
          }}
        >
          <App />
        </Auth0Provider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
