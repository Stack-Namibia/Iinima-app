import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import routes from "./settings/routes";
import { AnimatePresence } from "framer-motion";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithRedirectCallback = ({ children, ...props }: any) => {
  const navigate = useHistory();
  const onRedirectCallback = (appState: any) => {
    navigate.push(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

function App() {
  const location = useLocation();
  console.log(window.location.origin);
  return (
    <>
      <AnimatePresence>
        <Switch>
          <Auth0ProviderWithRedirectCallback
            domain='dev-wcqfxo8a0qx5y8su.us.auth0.com'
            clientId='1Uzut7tXOhlpoz8BknEukWXFzAHfRExo'
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            {routes.map(({ key, path, element }) => (
              <Route path={path} key={key} exact location={location}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: "100%" }}
                  exit={{ opacity: 0 }}
                >
                  {element}
                </motion.div>
              </Route>
            ))}
          </Auth0ProviderWithRedirectCallback>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
