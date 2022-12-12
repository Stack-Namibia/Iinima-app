import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import routes from "./settings/routes";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Switch>
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
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
