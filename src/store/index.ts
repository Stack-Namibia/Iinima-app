import { createStore, compose } from "@reduxjs/toolkit";
import reducers from "./reducers";
import middleware from "./middleware";
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(reducers, composeEnhancers(middleware));
