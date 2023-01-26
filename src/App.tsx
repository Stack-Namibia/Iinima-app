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
import NavigationBar from "./components/general/NavigationBar";
import Footer from "./components/general/Footer";
import LoadingPage from "./components/pages/loading-page";
import HttpError from "./components/pages/http-error";

function App() {
  const location = useLocation();
  const { isLoading, error } = useAuth0();

  if (error) {
    return <HttpError />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: "100%" }}
          exit={{ opacity: 0 }}
          className='flex flex-col min-h-screen max-h-full justify-between bg-white pt-0 ml-0 mr-0'
        >
          <NavigationBar />
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
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
