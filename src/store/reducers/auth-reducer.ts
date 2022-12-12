import { User } from "../../api/accounts";
import { AuthActionTypes } from "../action-types/auth-action-type";
import { AuthAction } from "../actions/auth-actions";

const initialState: any = {};

const reducer = (state: User = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, user: action.payload };
    case AuthActionTypes.LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
