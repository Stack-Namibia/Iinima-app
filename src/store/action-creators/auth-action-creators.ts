import { Dispatch } from "@reduxjs/toolkit";
import { User, UsersApi } from "../../api/accounts";
import { AuthActionTypes } from "../action-types/auth-action-type";
import { AuthAction } from "../actions/auth-actions";
import { logout as signOut } from "../../utils/firebase";
import { createUserByEmail } from "../../utils/auth/firebase-auth";
import { googleAuth } from "../../utils/auth/firebase-auth";
import { emailAuth } from "../../utils/auth/firebase-auth";
import { fetchUser } from "../../utils/api/accounts-service";

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
        payload: error,
      });
      console.log(error);
    }
  };
};

export const signInGoogle = (user: User) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: AuthActionTypes.LOGIN_REQUEST,
      });
      const response = await googleAuth();

      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE,
        payload: error,
      });
    }
  };
};

export const signInEmail = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: AuthActionTypes.LOGIN_REQUEST,
      });
      const response = await emailAuth(email, password);

      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE,
        payload: error,
      });
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

export const getUser = (id: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const data = await fetchUser(id);

      dispatch({
        type: AuthActionTypes.GET_USER,
        payload: data,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};
