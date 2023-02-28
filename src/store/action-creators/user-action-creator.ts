import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../api/accounts";
import { fetchUser, updateUser } from "../../utils/api/accounts-service";
import { UsersActionTypes } from "../action-types/user-action-type";
import { UserAction } from "../actions/user-actions";

// export const getUsers = (user: User[]) => {
//   return (dispatch: Dispatch<UserAction>) => {
//     try {
//       dispatch({
//         type: UsersActionTypes.FETCH_USER,
//         payload: user,
//       });
//     } catch (error) {
//       //alert here
//       console.log(error);
//     }
//   };
// };

export const getUser = (email: string) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const data = await fetchUser(email);
      dispatch({
        type: UsersActionTypes.FETCH_USER,
        payload: data,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};

export const UpdateUser = (user: User) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const data = await updateUser(user);
      dispatch({
        type: UsersActionTypes.UPDATE_USER,
        payload: data,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};

export const setUsers = (user: User) => {};
