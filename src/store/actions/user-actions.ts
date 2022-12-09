import { User } from "../../api/accounts";
import { UsersActionTypes } from "../action-types/user-action-type";

interface GetUsersAction {
  type: UsersActionTypes.FETCH_USER;
  payload: User[];
}

interface SetUsersAction {
  type: UsersActionTypes.SET_USER;
  payload: User[];
}

export type UserAction = GetUsersAction | SetUsersAction;
