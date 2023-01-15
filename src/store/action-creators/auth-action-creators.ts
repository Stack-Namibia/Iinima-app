import { Dispatch } from "@reduxjs/toolkit";
import { User} from "../../api/accounts";
import { AuthActionTypes } from "../action-types/auth-action-type";
import { AuthAction } from "../actions/auth-actions";
import { logout as signOut } from "../../utils/firebase";
import { createUserByEmail } from "../../utils/auth/firebase-auth";

export const authEmailAndPassword = (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: AuthActionTypes.LOGIN_REQUEST,
      });
      const response = await createUserByEmail(
        email,
        password,
        firstName,
        lastName
      );

      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE,
      });
      console.log(error);
    }
  };
};

export const setAuthUser = (user: User) => {
  return (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
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
