import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./settings/routes";

function App() {
  return (
    <>
      <Switch>
        {routes.map(({ key, path, element, exact }) => (
          <Route path={path} key={key} exact>
            {element}
          </Route>
        ))}
      </Switch>
    </>
  );
}

export default App;
