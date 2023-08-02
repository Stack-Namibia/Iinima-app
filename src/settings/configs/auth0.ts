// import base64 from "base-64";
// import auth0ConfigsEncoded from "./auth0-configs.json";
import { history } from "../../utils";

const onRedirectCallBack = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// const auth0Configs = JSON.parse(base64.decode(auth0ConfigsEncoded.configs));

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN ?? "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID ?? "",
  onRedirectCallBack,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE ?? "",
  },
};

export default providerConfig;
