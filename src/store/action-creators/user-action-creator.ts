import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../api/accounts";
import { UsersActionTypes } from "../action-types/user-action-type";
import { UserAction } from "../actions/user-actions";

export const getUsers = (user: User[]) => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UsersActionTypes.FETCH_USER,
        payload: user,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};

export const setUsers = (user: User) => {};
