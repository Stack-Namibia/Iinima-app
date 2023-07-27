import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

test("Loads home", async () => {
  const queryClient = new QueryClient();
  render(
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
});
