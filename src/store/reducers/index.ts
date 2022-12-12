import { combineReducers } from "@reduxjs/toolkit";
import authUser from "./auth-reducer";
const reducers = combineReducers({ authUser });

export default reducers;
export type RootState = ReturnType<typeof reducers>;
