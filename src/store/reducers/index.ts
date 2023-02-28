import { combineReducers } from "@reduxjs/toolkit";
import authUser from "./auth-reducer";
import itemReducer from "./item-reducer";
import userReducer from "./user-reducer";
const reducers = combineReducers({
  authUser,
  item: itemReducer,
  user: userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
