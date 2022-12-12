import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

test("Loads home", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
