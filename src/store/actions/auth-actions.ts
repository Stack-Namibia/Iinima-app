import { AuthActionTypes } from "../action-types/auth-action-type";

interface LoginRequestAction {
  type: AuthActionTypes.LOGIN_REQUEST;
}

interface LoginSucessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailureAction {
  type: AuthActionTypes.LOGIN_FAILURE;
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginRequestAction  | LoginSucessAction | LoginFailureAction | LogoutAction;
