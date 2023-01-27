import base64 from "base-64";
import auth0ConfigsEncoded from "./auth0-configs.json";
import { history } from "../../utils";

const onRedirectCallBack = (appState: any) => {
  //set token in local storage

  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const auth0Configs = JSON.parse(base64.decode(auth0ConfigsEncoded.configs));

const providerConfig = {
  domain: auth0Configs.domain,
  clientId: auth0Configs.clientId,
  onRedirectCallBack,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: auth0Configs.audience,
  },
};

export default providerConfig;