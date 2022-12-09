import { User } from "../../api/accounts";
import { UserActionTypes } from "../action-creators/user-action-creator";

interface GetUserAction {
  type: UserActionTypes.FETCH_USER;
  payload: User;
}

interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: User;
}

export type UserAction = GetUserAction | SetUserAction;
