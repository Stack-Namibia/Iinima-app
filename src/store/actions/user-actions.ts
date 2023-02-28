import { User } from "../../api/accounts";
import { UsersActionTypes } from "../action-types/user-action-type";

interface GetUserAction {
  type: UsersActionTypes.FETCH_USER;
  payload: User;
}

interface SetUsersAction {
  type: UsersActionTypes.SET_USER;
  payload: User[];
}
interface UpdateUserAction {
  type: UsersActionTypes.UPDATE_USER;
  payload?: {
    id: string;
    user: User;
  };
}

export type UserAction = GetUserAction | SetUsersAction | UpdateUserAction;
