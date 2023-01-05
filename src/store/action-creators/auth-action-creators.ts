import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../api/accounts";
import { AuthActionTypes } from "../action-types/auth-action-type";
import { AuthAction } from "../actions/auth-actions";
import { logout as signOut } from "../../utils/firebase";

export const setAuthUser = (user: User) => {
  return (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: user,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    try {
      signOut().then(() => {
        dispatch({
          type: AuthActionTypes.LOGOUT,
          payload: null,
        });
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};
