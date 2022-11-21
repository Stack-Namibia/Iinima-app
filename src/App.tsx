import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./settings/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </>
  );
}

export default App;
