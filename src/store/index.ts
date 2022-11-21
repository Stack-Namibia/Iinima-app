import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default configureStore(applyMiddleware(thunk), reducers);
