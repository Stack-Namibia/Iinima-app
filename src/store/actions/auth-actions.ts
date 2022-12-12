import { User } from "../../api/accounts";
import { AuthActionTypes } from "../action-types/auth-action-type";

interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: User;
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
  payload: null;
}

export type AuthAction = LoginAction | LogoutAction;
