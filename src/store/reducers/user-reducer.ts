import { User } from "../../api/accounts";
import { UsersActionTypes } from "../action-types/user-action-type";
import { UserAction } from "../actions/user-actions";

export interface UserState {
  isLoading: boolean;
  isError: boolean;
  userResponse?: User;
  user?: {
    email: string;
  };
  updateUser?: {
    id: string;
    user: User;
  };
  errResponse?: any;
}

const initialState: UserState = { isLoading: false, isError: false };

function reducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UsersActionTypes.FETCH_USER:
      return { isLoading: false, isError: false, user: action.payload };
    case UsersActionTypes.UPDATE_USER:
      return { isLoading: false, isError: false, updateUser: action.payload };
    default:
      return state;
  }
}

export default reducer;
