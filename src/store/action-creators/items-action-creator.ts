import { Dispatch } from "@reduxjs/toolkit";
import { fetchItems } from "../../utils/api/items-service";
import { ItemsActionTypes } from "../action-types/items-action-type";
import { ItemsAction } from "../actions/items-actions";

export const getItems = () => {
  return async (dispatch: Dispatch<ItemsAction>) => {
    try {
      const items = await fetchItems();
      dispatch({
        type: ItemsActionTypes.GET_ALL_ITEMS,
        payload: items,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};
