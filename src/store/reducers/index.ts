import { combineReducers } from "@reduxjs/toolkit";
import authUser from "./auth-reducer";
import itemReducer from "./item-reducer";
const reducers = combineReducers({ authUser, items: itemReducer });

export default reducers;
export type RootState = ReturnType<typeof reducers>;
