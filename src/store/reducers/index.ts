import { combineReducers } from "@reduxjs/toolkit";
import authUser from "./auth-reducer";
import itemReducer from "./item-reducer";
import locationReducer from "./location-reducer";
const reducers = combineReducers({ authUser, items: itemReducer, location: locationReducer });

export default reducers;
export type RootState = ReturnType<typeof reducers>;
