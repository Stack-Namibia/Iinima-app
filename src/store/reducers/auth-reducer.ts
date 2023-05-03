import { AuthActionTypes } from "../action-types/auth-action-type";
import { AuthAction } from "../actions/auth-actions";

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  user?: any;
  error?: any;
}

const isTokenPresent = sessionStorage.getItem("firebaseToken") !== null;
const initialState: AuthState = {
  isLoggedIn: isTokenPresent,
  isLoading: false,
  isError: false,
};

function reducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        isLoading: true,
        isError: false,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        isLoading: false,
        isError: false,
        user: action.payload,
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        isLoggedIn: false,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case AuthActionTypes.LOGOUT:
      return { isLoggedIn: false, isLoading: false, isError: false };
    case AuthActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
