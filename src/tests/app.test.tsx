import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

test("Loads home", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
