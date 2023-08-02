import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import routes from "./settings/routes";
import LoadingPage from "./components/pages/loading-page";
import HttpError from "./components/pages/http-error";
import { useEffect } from "react";
import SignUp from "./components/pages/sign-up";
import { useAccount } from "./hooks/accounts/queries";
import { SnackbarProvider } from "notistack";

function App() {
  const location = useLocation();

  const { isLoading, error, getAccessTokenSilently, isAuthenticated, user } =
    useAuth0();

  const {
    data,
    isLoading: isLoadingAccount,
    error: errorGettingAccount,
  } = useAccount(user?.sub || "", true);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        sessionStorage.setItem("auth0_token", token);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      getToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAccessTokenSilently, isAuthenticated]);

  if (!isLoading && !isLoadingAccount && !data) {
    return <SignUp />;
  }

  if (error || errorGettingAccount) {
    return <HttpError />;
  }

  if (isLoading || isLoadingAccount) {
    return <LoadingPage />;
  }

  return (
    <>
      <AnimatePresence>
        <SnackbarProvider>
          <Switch>
            {routes.map(({ key, path, element }, index) => (
              <Route path={path} key={index} exact location={location}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: "100%" }}
                  exit={{ opacity: 0 }}
                >
                  {element}
                </motion.div>
              </Route>
            ))}
          </Switch>
        </SnackbarProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
