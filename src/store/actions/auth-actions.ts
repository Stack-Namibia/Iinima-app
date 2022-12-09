import { User } from "../../api/accounts";
import { AuthActionTypes } from "../action-types/auth-action-type";

interface SetAuthUserAction {
  type: AuthActionTypes.SET_AUTH_USER;
  payload: User;
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = SetAuthUserAction | LogoutAction;
