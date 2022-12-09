import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
const reducers = combineReducers({ authReducer });

export default reducers;
export type RootState = ReturnType<typeof reducers>;
